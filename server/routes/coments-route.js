

    const comments = require('../controlers/comment-controler');
    const {authTokenUser} = require('../../lib/auth');

    function connectRoutes(router){
        router.post('/comment/add',authTokenUser,comments.createPost);
        router.put('/comment/reply',authTokenUser,comments.postReply);
        router.get('/comment',comments.fetchComment);
        router.put('/comment/open',comments.openComment);
        router.delete('/comment/delete/:id',comments.deletComment);
        // router.post('/comment/reply',authTokenUser,comments.postReply);
    }
    module.exports.connect = connectRoutes;
