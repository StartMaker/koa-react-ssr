/**开发环境**/
    const KoaWebpack = require('koa-webpack');
    const config = require('../config/webpack.dev');
/****/

const Koa = require('koa');
const app = new Koa();
const path = require('path');
KoaWebpack({config})
    .then(middleware => {
        app.use(middleware);
        app.use(async ctx => {
            const filename = path.resolve(webpackConfig.output.path, 'index.html')
            ctx.response.type = 'html';
            ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename)
        })
    });

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// app.use(async ctx => {
//     // if(ctx.request.url === '/'){
//         ctx.response.body = 'hello world';
//     // }
// });

app.listen(3000, function () {
    console.log('listen to 3000');
});