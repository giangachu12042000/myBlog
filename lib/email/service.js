
const NodeMailer = require('nodemailer');

module.exports.senGmail = (subject,email,token)=> {
    const url = `http://localhost:3333/api/comfrimation/${token}`;
    const mailOption ={
        from :'chugaph09188@fpt.edu.vn',
        to : email,
        subject : subject,
        text: subject,
        html: `please click this email to comfrim your email: <a href="${url}"> ${url} </a>`
    }
    let transporter = NodeMailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'chugaph09188@fpt.edu.vn',
            pass: '12042000'
        }
    }) 
    transporter.sendMail(mailOption, (err, data)=>{
        if(err){ 
        }else{ 
        } 
    })
}

