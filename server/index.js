
const Koa = require('koa');
const app = new Koa();
const path = require('path');
app.env = process.env.NODE_ENV;

if(app.env === 'development'){
    const KoaWebpack = require('koa-webpack');
    const config = require('../config/webpack.dev');
    KoaWebpack({config})
        .then(middleware => {
            app.use(middleware);
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
    app.use(layout);
    app.listen(3100,function () {
        console.log('listen to 3100');
    })
}
