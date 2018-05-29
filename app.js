const Koa = require('koa');
const logger = require('koa-logger');
const database = require('./database');
const app = new Koa();
const Location = require('./location');
const Router = require('koa-router');
const  router = new Router();
const koaBody = require('koa-body');

app.use(koaBody())
  .use(logger());


router.post('/locations', async (ctx, next) => {
  const location = new Location({payload: ctx.request.body});
  try {
    await location.save();
    ctx.response.status = 200;
    ctx.response.body = {'location': location};
  } catch(e) {
    ctx.response.status = 400;
    ctx.response.body = {'error': e};
  }
});

router.put('/locations', async (ctx, next) => {
  const body = ctx.request.body;
  const location = await Location.findOne({ 'payload._id': body._id });
  try {
    await location.update({payload: body});
    const updatedLocation = await Location.findOne({ 'payload._id': body._id });
    ctx.response.status = 200;
    ctx.response.body = {'location': updatedLocation};
  } catch(e) {
    ctx.response.status = 401;
    ctx.response.body = {'error': e};
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3210);
