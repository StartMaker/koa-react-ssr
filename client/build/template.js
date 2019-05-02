module.exports = (body) => {
    return (
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
        </head>
        <body>
        <div id="root">${body}</div>
        </body>
        </html>
        `
    )
};