const jwt = require('jsonwebtoken');

module.exports = function (token) {
    return new Promise(function (resolved) {
        jwt.verify(token,'zhizhuo',function (err,decoded) {
            if(err){
                resolved(err);
            }
            else {
                resolved(decoded);
            }
        })
    });
};