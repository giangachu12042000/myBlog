
const login = require('../controlers/login-controlers');

function connectRoutes(router){
    router.post('/login',login.userLogin);
}

module.exports.connect = connectRoutes;