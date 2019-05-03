const layout = require('../../client/build/layout');
function createRouter(router){
    const route_list = [
        {
            url: '/homepage',
            page: layout.homepage
        }
    ];
    route_list.forEach(function (item) {
        router.get(item.url,item.page);
    });
}

module.exports = createRouter;
