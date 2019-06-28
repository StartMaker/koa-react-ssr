const Koa = require('koa');
const app = new Koa();
const html = require('../client/template');
const Router = require('koa-router');
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log(3000)
});
router.get('/',html);