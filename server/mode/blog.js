function getByPage(page) {
    return `select * from blog.blogs limit ${(page-1)*10},10`;
}

module.exports = {getByPage};