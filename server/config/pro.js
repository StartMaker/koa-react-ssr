module.exports = (app) => {
    //配置静态资源
    // const a = require('../../dist/static/css/client.css');
    const path = require('path');
    const koa_static = require('koa-static');
    app.use(koa_static(path.join(__dirname, '../../dist/static')), {
        maxage: 1000 * 60 * 60 * 24 * 365,
        defer: false
        // setHeaders: (res,path) => {
        //     res.setHeader('Content-Type',['text/css', 'charset=utf-8']);
        //     if(path.indexOf('css') > -1){
        //
        //     }
        // }
    });

    //配置静态路由
    const pageRouter = require('../router');
    app.use(pageRouter.routes()).use(pageRouter.allowedMethods());

    app.listen(3100,function () {
        console.log('listen to 3100');
    });
};
