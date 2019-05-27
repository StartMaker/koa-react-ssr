const layout = require('../../client/build/layout');
function set_static_routers(router){
    const route_list = [
        {
            url: '/page/homepage(/:id)',
            page: layout.homepage
        }
    ];
    route_list.forEach(function (item) {
        router.get(item.url,item.page);
    });
}

module.exports = {set_static_routers};
