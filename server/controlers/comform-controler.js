
const jwt = require("jsonwebtoken"); 
const User_Schema = require('../modal/user-moldal');

 module.exports.getLogin = async(req, res)=>{
    try{
        const {token} = req.params; 
       const id = jwt.verify(token,process.env.TOKEN_SECRET,(err,decoded)=>{
           return decoded._id;
       });

       let query = {
           _id:id
        } 
        let setValue = {$set:{comfirmed:true}};
        const result = await User_Schema.updateOne(query,setValue); 
    }catch(err){ 
    }
    return res.redirect('http://localhost:3000/dang-nhap');
}