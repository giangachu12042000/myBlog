
const User_Schema = require('../modal/user-moldal');
const _ = require("lodash");
const Bcrypt = require('bcryptjs');
const {senGmail} = require('../../lib/email/service');

module.exports. createUser = async(req, res)=>{ 
    let {name, email, password} = req.body;   
    // const email = form.email;  
    const salt = await Bcrypt.genSaltSync();
    const hashpas = await Bcrypt.hashSync(password, salt);
    const item = {
        name: name,
        email: email,
        password:hashpas ,
        created_date: new Date()
    }
    User_Schema.findOne({email:email})
    .then(result=>{
        if(result){
            return res.send({ code: 0, message: 'Email is existed' }).end()
        }else{  
            const dataInsert = new User_Schema({...item}); 
            dataInsert.save()
            .then(users => {
                return res.send({ code: 1, message: 'register successfully!', data: users || [] }).end()
            });
        }
    })
}

module.exports.fetchUsers = (req, res)=>{  
    const {search} = req.query;
    const startSearch = {};
    if(search){
        startSearch.$or = [{name:{$regex: `.*${search}*`,$options:'ig'}}]
    }
    const query ={
        ...startSearch
    } 
   User_Schema.find(query)
   .then(users => {
        return res.send({ code: 0, message: 'sucess', data: users || [] }).end()
    });
}

module.exports.updateUser = (req, res)=>{ 
    const {id} = req.params;
    const {name,password,email} = req.body;
    let query = {
        _id:id
    }
    let newValue = {$set:{name,password,email,created_update: new Date()}}; 
    User_Schema.findOne({email:email})
    .then(result=>{
        if(result){
            if(result._id == id){
                User_Schema.updateOne(query,newValue)
                .then(users=>{
                    return res.send({code:0, message:'sucess',data:users || []}).end()
                })
            }else{
                return res.send({ code: 1, message: 'Email is existed' }).end() 
            }
        }else{
            console.log(query,newValue)
            User_Schema.updateOne(query,newValue)
            .then(users=>{ 
                return res.send({code:0, message:'sucess',data:users || []}).end()
            })
        }
    })
}
module.exports.deleteUser = (req, res)=> {
    const {id} = req.params; 
     User_Schema.findByIdAndRemove(id)
    .then(users=>{
        return res.send({code:0, message:'sucess',data:users || []}).end()
    })
}