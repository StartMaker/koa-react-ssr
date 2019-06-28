module.exports = {
    exec: true,
    plugins: [
        require('precss'),
        require('autoprefixer')({
            overrideBrowserslist: [
                "last 1 version",
                "> 1%",
                "maintained node versions",
                "not dead"
            ],
            flexbox: 'no-2009',
        })
    ]
};