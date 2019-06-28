const layout = require('../../client/build/layout');
const koaRouter = require('koa-router');
const router = new koaRouter();

const route_list = [
    {
        url: '/*',
        page: layout
    }
];
route_list.forEach(function (item) {
    router.get(item.url,item.page);
});

module.exports = router;
