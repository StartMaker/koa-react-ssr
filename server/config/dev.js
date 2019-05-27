const path = require('path');
const koa_router = require('koa-router');
const koa_webpack = require('koa-webpack');

module.exports = (app) => {
    //配置路由
    const router = new koa_router();
    app.use(router.routes()).use(router.allowedMethods());
    //静态资源加载
    const config = require('../../config/webpack.dev');
    koa_webpack({config})
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

    app.listen(3000, function () {
        console.log('listen to 3000');
    });
};