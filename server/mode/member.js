function checkLogin (username, password){
    return `select exists(select * from blog.members where username='${username}' and password='${password}') as result`;
}

module.exports = {checkLogin};