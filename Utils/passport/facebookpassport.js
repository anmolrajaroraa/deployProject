// to write the google strategy here 
const FacebookStrategy=require('passport-facebook');
const idGen = require('../idGenerator/custIdGen');
const Customer= require('../../models/setterGetter/customer.model');
const customerModel = require('../../db/schemas/customerSchema');
//GoogleStartegy is like a class so capital
const passport=require('passport');
//this will call when u write a cookie 
passport.serializeUser((user,done)=> {
    var error=null;
    done(error,user);
});
//this will call when u read a data from cookie 
passport.deserializeUser((userid,done)=> {
    // console.log('User Session cookie ',userid);
    done(null,userid);
});
passport.use(new FacebookStrategy({
    callbackURL:"/customer/auth/facebook/callback",
    clientID:"616094372132499",
    clientSecret:'e0aba2dad6458fbd1141eeac23d7d240',
    profileFields: ['id', 'displayName', 'photos', 'email']
    // login karne ke baad token mila karega , token milega usko hum session mei use kar sakte hai 
},(accessToken,refreshToken,profile,done)=>{
  //  console.log("Callback Facebook...",profile," Token is ",accessToken);
  var splitStr = profile.displayName.split(" ");
  
    var userObject={
        email:profile._json.email,
        firstName:splitStr[0],
        lastName:splitStr[1],
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

    //profile humein sirf profile dega jo jo humein chahiye 
}));
//module.exports islie nahi likha coz na toh yeh function hai na class h 
// toh direct require kar denge toh ho jayega read karna start kar dega file ko
