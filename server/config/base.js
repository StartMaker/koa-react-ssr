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
    const koa_session = require('koa-session-redis3');
    app.keys = ['Wjolliosjoi'];
    app.use(koa_session({
        store: {
            host: '127.0.0.1',
            port: 6379,
            ttl: 3600,
            keySchema: 'your:schema'
        },
        cookie: {
            httpOnly: true,
            path: '/',
            maxAge: 24 * 60 * 60 * 1000
        }
    }));
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