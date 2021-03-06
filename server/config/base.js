module.exports = (app) => {
    app.env = JSON.stringify(process.env.NODE_ENV);
    //json
    const koa_json = require('koa-json');
    app.use(koa_json({pretty: true}));
    //gzip压缩
    const koa_compress = require('koa-compress');
    app.use(koa_compress({
        threshold: 1024
    }));
    //post body
    const koa_bodyparser = require('koa-bodyparser');
    app.use(koa_bodyparser());
    //session
    const koa_session = require('koa-session');
    app.keys = ['Wjolliosjoi'];
    app.use(koa_session({
        key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
        /** (number || 'session') maxAge in ms (default is 1 days) */
        /** 'session' will result in a cookie that expires when session/browser is closed */
        /** Warning: If a session cookie is stolen, this cookie will never expire */
        maxAge: 86400000,
        autoCommit: true, /** (boolean) automatically commit headers (default true) */
        overwrite: true, /** (boolean) can overwrite or not (default true) */
        httpOnly: true, /** (boolean) httpOnly or not (default true) */
        signed: true, /** (boolean) signed or not (default true) */
        rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
        renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    },app));
    //配置controller
    const {set_controller} = require('../controller');
    set_controller(app);

//打印日志
    app.use(async (ctx, next) => {
        const start = Date.now();
        await next();
        const ms = Date.now() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
};