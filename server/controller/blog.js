const koaRouter = require('koa-router');
const router = new koaRouter();

const blog = require('../mode/blog');
const {runSql} = require('../mode');

router
    .get('/api/blog/display', async (ctx,next) => {
        ctx.body = await runSql(blog.getByPage(1));
    })
    .get('/api/blog/more', async (ctx,next) => {
        let req_body = ctx.request.query;
        ctx.body = await runSql(blog.getByPage(req_body.page));
    });

module.exports = router;