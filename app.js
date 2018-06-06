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
  console.log(payload)
  try {
    if(payload.error) {
      await location.update({error: payload.error});
    } else {
      await location.update({directory_url: payload.url});
    }
    ctx.response.status = 200;
    const updatedLocation = await Location.findById(payload.location._id);
    console.log(updatedLocation)
    ctx.response.body = {'location': ctx.request.body};
  } catch(e) {
    ctx.response.status = 401;
    ctx.response.body = {'error': e};
  }
});

// router.put('/locations', async (ctx, next) => {
//   const body = ctx.request.body;
//   const location = await Location.findOne({ 'payload._id': body._id });
//   try {
//     await location.update({payload: body});
//     const updatedLocation = await Location.findOne({ 'payload._id': body._id });
//     ctx.response.status = 200;
//     ctx.response.body = {'location': updatedLocation};
//   } catch(e) {
//     ctx.response.status = 401;
//     ctx.response.body = {'error': e};
//   }
// });
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3200);
