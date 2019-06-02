function get_blog(page, owner) {
    return `select * from blog.blogs limit ${(page-1)*10},${page*10}` + (owner!==''?`where username=${owner}`:"");
}

module.exports = {get_blog};