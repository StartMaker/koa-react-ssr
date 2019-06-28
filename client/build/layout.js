const createTemplate = require('./template');
const bundle = require('../../dist/static/client');
const ReactDOMRender = require('react-dom/server');

module.exports = async (ctx) => {
    let html = createTemplate(ReactDOMRender.renderToString(bundle.default(ctx.request.url,{})));
    console.log(html);
    ctx.body = html;
};