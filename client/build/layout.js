const createTemplate = require('./template');
const bundle = require('../../dist/static/client');
const ReactDOMRender = require('react-dom/server');
// import createContent from '../../dist/static/client';
console.log(bundle);

module.exports = async (ctx) => {
    ctx.response.status = 200;
    let html = createTemplate(ReactDOMRender.renderToStaticMarkup(bundle.default(ctx.request.url,{})));
    ctx.response.body = html;
};