module.exports = (app) => {
  //配置静态资源
  const path = require('path');
  const fs = require('fs');
  const koa_static = require('koa-static');
  app.use(koa_static(path.join(__dirname, '../../dist')), {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    defer: false
  });

  //配置静态路由
  const KoaRouter = require('koa-router');
  const router = new KoaRouter();
  router.get('/*', ctx => {
    ctx.response.type = 'html';
    ctx.body = fs.createReadStream(path.resolve(__dirname, '../../dist/index.html'));
  });
  app.use(router.routes()).use(router.allowedMethods());

  //配置history
  const koaHistory = require('connect-history-api-fallback');
  app.use(koaHistory({
    index: '/',
    rewrites: [
      { from: '/page/homepage', to: '/'},
      { from: '/page/writeArticle', to: '/'}
    ]
  }));

  app.listen(3200,function () {
    console.log('listen to 3200');
  });
};