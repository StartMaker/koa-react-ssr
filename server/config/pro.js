module.exports = (app) => {
    //配置静态资源
    const koa_static = require('koa-static');
    app.use(koa_static('../dist/static'));

    //配置静态路由
    const {set_static_routers} = require('../router');
    set_static_routers(app);

    app.listen(3100,function () {
        console.log('listen to 3100');
    });
};
