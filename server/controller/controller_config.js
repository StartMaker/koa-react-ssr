const responseBody = (code, err, msg) => {
    return {
        err,
        msg,
        code
    }
};

const codes = [
    ''
];

module.exports = {responseBody};
