

    const contacts = require('../controlers/contacts-controler');
    const {authTokenUser} = require('../../lib/auth');

    function connectRoutes(router){
        router.post('/contact/add',authTokenUser,contacts.createPost);
        router.post('/contact/reply',contacts.postReply);
        router.get('/contact',contacts.fetchContact) ; 
    } 
    module.exports.connect = connectRoutes;
