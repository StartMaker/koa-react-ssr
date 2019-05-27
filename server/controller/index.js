const entry = require('./entry');

function set_controller(app) {
    app.use(entry.routes()).use(entry.allowedMethods());
}

module.exports = {set_controller};