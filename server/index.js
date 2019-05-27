const Koa = require('koa');
const app = new Koa();

const {set_config} = require('./config');
set_config(app);