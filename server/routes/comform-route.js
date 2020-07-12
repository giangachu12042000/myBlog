
const comfirm = require('../controlers/comform-controler');

function connectRoutes(router){
    router.get('/comfrimation/:token',comfirm.getLogin);
}

module.exports.connect = connectRoutes;