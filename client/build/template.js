module.exports = (body, css) => {
    return (
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>我的博客</title>
            <meta http-equiv="cache-control" content="no-cache" />
            <meta http-equiv="content-type" content="text/html"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <style type="text/css">${[...css].join(' ')}</style>
        </head>
        <body>
        <div id="root">${body}</div>
        </body>
        </html>
        `
    )
};