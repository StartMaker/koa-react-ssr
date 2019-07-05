const layout = require('../../client/build/layoutServer');
const koaRouter = require('koa-router');
const router = new koaRouter();

router.get('/*', layout);
module.exports = router;
