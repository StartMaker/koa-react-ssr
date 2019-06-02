const koa_router = require('koa-router');
const router = new koa_router();

const {get_blog} = require('../mode/blog');
const {run_sql} = require('../mode');
const {response_body} = require('./controller_config');

router
    .get('/api/blog/display', async (ctx,next) => {
        console.log(ctx.request.body);
        let req_body = ctx.request.body;
        let data = await run_sql(get_blog(1,''));
        ctx.body = data;
    });


module.exports = router;