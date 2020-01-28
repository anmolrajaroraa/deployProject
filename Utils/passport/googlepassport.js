const GoogleStrategy=require('passport-google-oauth2');
const idGen = require('../idGenerator/custIdGen');
const url=require('url');
const Customer= require('../../models/setterGetter/customer.model');
const qs = require('querystring');
const passport=require('passport');
const customerModel = require('../../db/schemas/customerSchema');
passport.serializeUser((user,done)=>{
    var error=null;
    done(error,user);
})

passport.deserializeUser((userid,done)=>{
    done(null,userid);
})
passport.use(new GoogleStrategy({
    clientID:"355504455526-imkkrhimdl6qeq54enuestmb7f9508lk.apps.googleusercontent.com", // put the company ClientID here 
    clientSecret:'LeZ-Qva1xhg-TxpAybIxskAq',// put the client secret Here 
    callbackURL:"/customer/dashboard",
    passReqToCallback: true
},function(req,accessToken,refreshToken,profile,done){
  // console.log("Callback Google...",profile," Token is ",accessToken);
    
    var userObject={
        email:profile.emails[0].value,
        firstName:profile._json.given_name,
        lastName:profile._json.family_name,
        createdAt:Date.now(),
    }
var user= new Customer.customerModel();
for(let key in userObject){
user[key]=userObject[key];
}

    customerModel.Customer.findOne({email: user.email},(err,userinfo)=>{
        if(err){
           return done('DB Error');
        }else if(userinfo==null){
    user.customerId=idGen.idgenerator(user.email);
           customerModel.Customer.create(user,(err,doc)=>{
               if(err){
          return done('DB Error')
               }else{
                 return done(null,doc);
               }
           })
        }else{
            return done(null,userinfo)
        }
    })

  
}));
