const DOMRenderServer = require('react-dom/server');
const Body = require('../../dist/static/client');

module.exports = async (ctx) => {
  const content = DOMRenderServer.renderToString(Body.default(ctx.request.url,{}));
  const html = (
    `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
            <meta http-equiv="cache-control" content="no-cache" />
            <meta http-equiv="content-type" content="text/html"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<!--            <link rel="stylesheet" type="text/css" href="/css/client-ddc5f4ecb9f06661039b.css"/>-->
        </head>
        <body>
        <div id="root">${content}</div>
        </body>
        </html>
        `
  );
  ctx.response.body = html;
};