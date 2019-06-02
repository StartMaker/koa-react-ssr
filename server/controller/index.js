const entry = require('./entry');
const blogs = require('./blog');

function set_controller(app) {
    app.use(entry.routes()).use(entry.allowedMethods());
    app.use(blogs.routes()).use(blogs.allowedMethods());
}

module.exports = {set_controller};