const koa_router = require('koa-router');
const router = new koa_router();

router
    .get('/login',async function(ctx, next) {
        if(ctx.session.view_count === null){
            ctx.session.view_count = 1;
        }
        else {
            ctx.session.view_count ++;
        }
        ctx.body = {view_count: ctx.session.view_count};
    })
    .get('/register',async (ctx, next) => {

    });

module.exports = router;
