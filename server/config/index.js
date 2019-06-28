function set_config(app) {
    const set_base_config = require('./base');
    set_base_config(app);
    app.env = JSON.stringify('production');
    switch (app.env) {
        case JSON.stringify('production'):
            const set_pro_config = require('./pro');
            set_pro_config(app);
            return;
        case JSON.stringify('development'):
            const set_dev_config = require('./dev');
            set_dev_config(app);
            return;
    }
}

module.exports = {set_config};