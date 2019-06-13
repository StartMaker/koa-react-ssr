const jwt = require('jsonwebtoken');

module.exports = function (token) {
    return new Promise(function (resolved, rejected) {
        jwt.verify(token,'zhizhuo',function (err,decoded) {
            if(err){
                rejected(err);
            }
            else {
                resolved(decoded);
            }
        })
    });
};