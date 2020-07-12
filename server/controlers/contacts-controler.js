
const Contact_Schema = require('../modal/contact-moldal');
const User_Schema = require('../modal/user-moldal');

const _ = require("lodash"); 
  module.exports.createPost =(req, res)=>{
    const loginId = req.userId;
    console.log(loginId,'==============>>?id loagin')
    User_Schema.findOne({_id:loginId})
    .then(user=>{ 
        const {message} = req.body;
        const item = {
            reply_by : user.name,
            message:message,
            status : 'Waiting !!',
            created_date: new Date()
        } 
        const insetcontact = new Contact_Schema({...item});
        insetcontact.save()
        .then(contacts =>{
            if(contacts){
                return res.send({code: 0, message: 'send sucess', data: contacts}).end()
            }
        })
    })
}
module.exports.fetchContact = (req, res)=>{
    Contact_Schema.find()
        .then(contacts =>{
            if(contacts){
                return res.send({code: 0, message: 'sucess', data: contacts}).end()
            }
    })
}
module.exports.updateContact = (req, res)=>{
    
    const {id} = req.params; 
    Contact_Schema.findByIdAndRemove(id)
    .then(contacts=>{
        return res.send({code: 1, message: 'sucess', data: contacts}).end()
    })
}
module.exports.postReply = (req, res)=>{ 
    let { message, name } = req.body;  
    const loginId = req.userId; 
    User_Schema.findOne({_id: loginId}) 
    .then(reply_by=>{ 
        const edit = {
            message:message, status:'completed',
            reply_date: new Date(), reply_for: name, reply_by: reply_by.name, hide: 'hide'
        }
        const inset = new Contact_Schema({...edit})
        inset.save()
        .then( contacts =>{
            if(contacts){
                User_Schema.findOne({name: contacts.reply_for}) 
                .then(result=>{
                    senGmail(contacts.message , result.email);
                })
                return res.send({code: 10, message: 'sucess', data: contacts}).end() 
            }
        })
    })
}
module.exports.deletContact = (req, res)=>{ 
    const {id} = req.params; 
    Comment_Schema.findByIdAndRemove(id)
    .then(comments=>{
        return res.send({code: 1, message: 'sucess', data: comments}).end()
    })
}