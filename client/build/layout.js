const createTemplate = require('./template');
const bundle = require('../../dist/static/client');
const ReactDOMRender = require('react-dom/server');
// import createContent from '../../dist/static/client';
console.log(bundle);

module.exports = async (ctx) => {
    let html = createTemplate(ReactDOMRender.renderToStaticMarkup(bundle.default(ctx.request.url,{})));
    ctx.body = html;
};