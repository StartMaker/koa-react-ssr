const koa_router = require('koa-router');
const router = new koa_router();

const {run_sql} = require('../mode');
const {check_login} = require('../mode/member');
const {response_body} = require('./controller_config');

router
    .post('/api/login',async function(ctx, next) {
        let req_body = ctx.request.body;
        let [{result}] = await run_sql(check_login(req_body.username, req_body.password));
        if(result === 1){
            ctx.body = response_body(0,'',{username: req_body.username});
        }
        else {
            ctx.body = response_body(1,'','密码 or 账号错误');
        }

    })
    .get('/register',async (ctx, next) => {

    });

module.exports = router;
