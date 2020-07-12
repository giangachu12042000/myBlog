
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv') ; 

dotenv.config();


module.exports.authTokenUser = (req,res, next)=>{
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
    } 
    if (!token)
    return res.send({ code: 5, auth: false, message: "No token provided." });
     
    jwt.verify(token,process.env.TOKEN_SECRET, (err, decoded) => {
      if (err)
      return res.send({
          code: 5,
          auth: false,
          message: "Failed to authenticate token."
        });
        console.log(decoded,'===================>??userId' )
        req.userId = decoded._id;
        return next();
    });
}