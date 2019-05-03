const Koa = require('koa');
const app = new Koa();
const path = require('path');
const KoaRouter = require('koa-router');
const KoaJson = require("koa-json");
const KoaStatic = require('koa-static');
app.env = JSON.stringify(process.env.NODE_ENV);
const router = new KoaRouter();
//配置路由
app.use(router.routes()).use(router.allowedMethods());
//配置json
app.use(KoaJson());

if(app.env === JSON.stringify('development')){
    const KoaWebpack = require('koa-webpack');
    const config = require('../config/webpack.dev');
    KoaWebpack({config})
        .then(middleware => {
            app.use(middleware);
            // Router.get('/',ctx => {
            //     const filename = path.resolve(config.output.path, 'index.html');
            //     ctx.response.type = 'html';
            //     ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename);
            // });
            app.use(async ctx => {
                const filename = path.resolve(config.output.path, 'index.html');
                ctx.response.type = 'html';
                ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename);
            })
        })
        .catch(function (e) {
            console.log(e);
        });
    app.listen(3000, function () {
        console.log('listen to 3000');
    });
}
else {
    const createRouter = require('./router/index');
    //静态文件引入
    app.use(KoaStatic('./dist/static'));
    //创建路由
    createRouter(router);
    app.listen(3100,function () {
        console.log('listen to 3100');
    });
}

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});