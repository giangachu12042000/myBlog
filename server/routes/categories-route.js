 
const categories = require('../controlers/categories-controler');

function connectRoutes(router){
    router.post('/category/add',categories.createCategroy);
    router.get('/category',categories.fetchCategories);
    router.get('/category/:id',categories.getById);
    router.put('/category/edit/:id',categories.updateCategory);
    router.delete('/category/delete/:id',categories.delete);
}

module.exports.connect = connectRoutes;
