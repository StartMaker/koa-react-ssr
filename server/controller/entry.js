const koaRouter = require('koa-router');
const router = new koaRouter();

const {runSql} = require('../mode');
const {checkLogin} = require('../mode/member');
const {responseBody} = require('./controller_config');
const signJwt = require('../token/sign');
const checkJwt = require('../token/check');

router
    .post('/api/login',async function(ctx, next) {
        let reqBody = ctx.request.body;
        let [{result}] = await runSql(checkLogin(reqBody.username, reqBody.password));
        let jwt = signJwt(reqBody);
        if(result === 1){
            ctx.body = responseBody(0,'',{username: reqBody.username,jwt:jwt});
        }
        else {
            ctx.body = responseBody(1,'','密码 or 账号错误');
        }

    })
    .get('/api/loginByAuthorization', async function (ctx, next) {
        let reqBody = ctx.request;
        let authorization = await checkJwt(reqBody.header.authorization);
        let [{result}] = await runSql(checkLogin(authorization.username, authorization.password));
        if(result === 1){
            ctx.body = responseBody(0,'',{username: authorization.username});
        }
        else {
            ctx.body = responseBody(1,'','密码 or 账号错误');
        }
    })
    .get('/register',async (ctx, next) => {

    });

module.exports = router;
