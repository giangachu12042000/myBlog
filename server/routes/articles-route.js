
const articles = require('../controlers/articles-controler');

function connectRoutes(router){
    router.get('/article',articles.fetchArticles);
    router.get('/article/:id',articles.getArticleById);
    router.post('/article/add',articles.createArticle);
    router.put('/article/edit/:id',articles.updateArticle);
    router.put('/article/:param/:id',articles.countViews);
    router.delete('/article/delete/:id',articles.deleteArticle);
}
module.exports.connect = connectRoutes ;