//    
const users = require('../controlers/users-controler');

function connectRoutes(router){
    router.get('/user', users.fetchUsers);
    router.post('/user/add', users.createUser);
    router.put('/user/edit/:id', users.updateUser);
    router.delete('/user/delete/:id', users.deleteUser);
}

module.exports.connect = connectRoutes;