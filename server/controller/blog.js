const koa_router = require('koa-router');
const router = new koa_router();

const blog = require('../mode/blog');
const {run_sql} = require('../mode');
const {response_body} = require('./controller_config');

router
    .get('/api/blog/display', async (ctx,next) => {
        ctx.body = await run_sql(blog.getByPage(1));
    })
    .get('/api/blog/more', async (ctx,next) => {
        let req_body = ctx.request.query;
        ctx.body = await run_sql(blog.getByPage(req_body.page));
    });

module.exports = router;