
const Comment_Schema = require('../modal/comment-moldal');
const User_Schema = require('../modal/user-moldal');

const _ = require("lodash"); 
  module.exports.createPost =(req, res)=>{
    const loginId = req.userId;
    
    User_Schema.findOne({_id:loginId})
    .then(user=>{ 
        const {message,id} = req.body;
        const item = {
            reply_by : user.name,
            message:message,
            status : 'Waiting !!', 
            article: id,
            created_date: new Date()
        }
        const insetComments = new Comment_Schema({...item});
        insetComments.save();
        Comment_Schema.find()
        .then(comments =>{
            if(comments){
                console.log(comments,'===1?')
                return res.send({code: 0, message: 'send sucess', data: comments}).end()
            }
        })
    })
}
module.exports.fetchComment = (req, res)=>{
    const {slug} = req.query; 
    const query= {
        article:slug
    }
    Comment_Schema.find()
        .then(comments =>{
            if(comments){ 
                console.log(comments,'====>')
                return res.send({code: 0, message: 'sucess', data: comments}).end()
            }
    })
}
module.exports.updateContact = (req, res)=>{ 
    const {id} = req.params; 
    Comment_Schema.findByIdAndRemove(id)
    .then(comments=>{
        return res.send({code: 1, message: 'sucess', data: comments}).end()
    })
}
module.exports.openComment = (req, res)=>{
    const {id} = req.body; 
    const edit = {$set:{open:true}};
    const query ={
        _id:id
    }
    Comment_Schema.updateOne(query,edit)
    .then(comment => {
        return res.send({code: 1 }).end() 
    })
}
module.exports.postReply = (req, res)=>{ 
    let { reply,name,id } = req.body; 
    const loginId = req.userId;
    User_Schema.findOne({_id: loginId})
    .then(reply_by=>{
        const item = { 
            message:reply, 
            status:'completed',
            reply_date: new Date(), 
            reply_for: name,
            parent: id, 
            reply_by: reply_by.name
        }
        const query = {
            _id:id
        }
        const edit = {$set:{open:false},$push:{reply:item}}
        Comment_Schema.updateOne(query,edit)
        .then( comments =>{
            if(comments){
                return res.send({code: 10, message: 'sucess', data: comments}).end()
            }
        })
    })
}
module.exports.deletComment = (req, res)=>{
    const {id} = req.params;
    Comment_Schema.findByIdAndRemove(id)
    .then(comments=>{
        return res.send({code: 1, message: 'sucess', data: comments}).end()
    })
}