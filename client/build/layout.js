const createTemplate = require('./template');
const bundle = require('../../dist/static/client');
const ReactDOMRender = require('react-dom/server');

module.exports.homepage = async (ctx) => {
    ctx.response.status = 200;
    let html = createTemplate(ReactDOMRender.renderToStaticMarkup(bundle.default(ctx.request.url,{})));
    ctx.response.body = html;
};