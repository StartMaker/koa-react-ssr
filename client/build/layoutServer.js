const createTemplate = require('./template');
const bundle = require('../../dist/serverRender');
const React = require('react');
const ReactDOMRender = require('react-dom/server');
// const { JSDOM } = require('jsdom');

module.exports = async (ctx) => {
    const css = new Set();
    const insertCss = (...styles) => {styles.forEach((style) => {css.add(style._getCss())})};
    console.log(css);
    let html = createTemplate(ReactDOMRender.renderToString(bundle.default(ctx.request.url, {}, insertCss)), css);
    // let text = new JSDOM(html);
    // global.document = text.window.document;
    // global.window = text.window;
    // require('hotcss/src/hotcss');
    ctx.body = html;
};