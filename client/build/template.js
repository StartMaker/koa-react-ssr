module.exports = (body) => {
    return (
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <link rel="stylesheet" type="text/css" href="/css/client-ddc5f4ecb9f06661039b.css"/>
        </head>
        <body>
        <div id="root">${body}</div>
        </body>
        </html>
        `
    )
};