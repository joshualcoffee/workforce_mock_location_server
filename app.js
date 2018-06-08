const Koa = require('koa');
const logger = require('koa-logger');
const database = require('./database');
const app = new Koa();
const Location = require('./location');
const Router = require('koa-router');
const  router = new Router();
const koaBody = require('koa-body');
const auth = require('./auth');
const views = require('koa-views');
const locationsData = require('./locations');
const wf = require('./workforce_connector');
app.use(koaBody())
  .use(logger())
  .use(views(__dirname + '/views', {
    map: {
      html: 'ejs'
    }
  }));

router.get('/', async (ctx, next) => {
  const locations = await Location.find({});
  await ctx.render('root.html', {
    locations: locations
  })
})
router.post('/harmony/hooks/callback', async (ctx, next) => {
  const payload = ctx.request.body.payload;
  const location = await Location.findById(payload.location._id);
  try {
    if(payload.error) {
      await location.update({error: payload.error});
    } else {
      await location.update({directory_url: payload.url});
    }
    ctx.response.status = 200;
    const updatedLocation = await Location.findById(payload.location._id);
    ctx.response.body = {'location': ctx.request.body};
  } catch(e) {
    ctx.response.status = 401;
    ctx.response.body = {'error': e};
  }
});

router.get('/new_operation', async (ctx, next) => {
  await ctx.render('new_operation.html', {
    locations: locationsData
  })
});

router.post('/new_operation', async (ctx, next) => {
  const body = ctx.request.body;
  const ids = body.locations.map(l => parseInt(l));
  const selectedLocations = locationsData
    .filter((l) => ids.includes(l._id))
    .map((l) => {
      const location = new Location({payload: l});
      location.save();
      return wf.createOperation(body.directory, location);
    });

  try{
    await wf.batchSendOperations(selectedLocations);
  }catch(e) {
    console.log(e)
  }
  ctx.redirect('/')
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
