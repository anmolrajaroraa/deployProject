const otplib = require('otplib');
const OtpCrud = {
   // orderSecret:'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD',
    // generateOrderOtp() {
    //     return "JMN" + shortId.generate();
    checkOtp(token,secret){
       try{
         //  console.log(token);
           
           otplib.authenticator.options={
            window:1,                          //window must be same
            step:180
        }
        const isValid = otplib.authenticator.verify({token,secret });
        return isValid;
       }catch(err){
return null;
       }
    }
    ,


   generateOrderOtp(){

   let otp={};
   
    otplib.authenticator.options={
        window:1,
        step:180
    }
    const Authenticator = otplib.authenticator;
    otp.timeRemain=otplib.authenticator.timeRemaining();
    let secret=(new Date()).toString();
    otp.code= Authenticator.generate(secret);
    otp.secret=secret;
    return otp;
}
}
module.exports=OtpCrud;