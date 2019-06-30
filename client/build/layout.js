const createTemplate = require('./template');
const bundle = require('../../dist/static/client');
const ReactDOMRender = require('react-dom/server');
const { JSDOM } = require('jsdom');

module.exports = async (ctx) => {
    let html = createTemplate(ReactDOMRender.renderToStaticMarkup(bundle.default(ctx.request.url,{})));
    let text = new JSDOM(html);
    global.document = text.window.document;
    global.window = text.window;
    // require('hotcss/src/hotcss');
    ctx.body = html;
};