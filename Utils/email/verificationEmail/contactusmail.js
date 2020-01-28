const nodemailer = require("nodemailer");
const userTemplate=require('./mailcontact');
function mail(userdata) { 
 return function(res,cb){
    userTemplate(userdata,res).then(data=> {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'jagdish.justmyneed@gmail.com', 
               pass: 'justmyneed@123' 
           }
       });
       const mailOptions = {
        from: 'doNotReply@justMyNeed.com',  
        to: userdata.email, 
        subject: userdata.data.subject, 
        html: data 
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
        cb('Email Error');
         
        else
        //  console.log(info);
          cb(null,res);
     });
    }).catch(err=> {
     // console.log(err);
cb(err);
    })
  
  }
}
module.exports=mail;