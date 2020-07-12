
const User_Schema = require('../modal/user-moldal');
const Bcrypt = require('bcryptjs'); 
const jwt = require("jsonwebtoken"); 
const {senGmail} = require('../../lib/email/service');
module.exports.userLogin = (req,res)=>{
    const {email, password } = req.body; 
        User_Schema.findOne({email:email})
            .then(async result=>{
                if(result){
                    const compare = await Bcrypt.compare(password,result.password);  
                    if(compare){
                        const token = jwt.sign({_id:result._id},process.env.TOKEN_SECRET);
                        if(result.comfirmed =='false'){
                            res.send({message:'please comfirm your email to login!'});
                            senGmail('comfirm email to login',result.email,token);
                        }else{
                            res.header('x-access-token',token).send({code:1, message:'login successfully!',data:token}); 
                        }
                    }else{
                        return res.send({code:0, message:'Email or password does not exist'});
                    }
                }else{
                    return res.send({code:0, message:'Email or password does not exist'});
                }
            })
}