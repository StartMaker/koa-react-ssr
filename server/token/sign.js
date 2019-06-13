const jwt = require('jsonwebtoken');
//应该是随机生成key
const key = 'zhizhuo';

module.exports = function (obj) {
    const token = jwt.sign({
        ...obj
    },key,{expiresIn: '15 days'});
};