const Koa = require('koa');
const app = new Koa();
const path = require('path');
const KoaRouter = require('koa-router');
const KoaJson = require("koa-json");
const KoaStatic = require('koa-static');
app.env = process.env.NODE_ENV||'production';
const router = new KoaRouter();
//配置路由
app.use(router.routes()).use(router.allowedMethods());
//配置json
app.use(KoaJson());

if(app.env === 'development'){
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

    //logger
    app.use(async (ctx, next) => {
        const start = Date.now();
        await next();
        const ms = Date.now() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });

    app.listen(3000, function () {
        console.log('listen to 3000');
    });
}
else {
    const layout = require('../client/build/layout');
    // app.use(layout);
    app.use(KoaStatic('./dist/static'));
    router.get('/homepage',layout);
    app.listen(3100,function () {
        console.log('listen to 3100');
    });
}
