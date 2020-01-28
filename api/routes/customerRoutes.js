const express = require('express');
const customerRoutes = express.Router();
const customerCrud=require('../../db/crudOperations/customerCrud')
const passport = require('passport')
const customer= require('../../models/setterGetter/customer.model')
const orderCrud= require('../../db/crudOperations/orderCrud');
const order= require('../../models/setterGetter/order.model');
const jwt=require('jsonwebtoken');
const delivDetailCrud= require('../../db/crudOperations/deliveryCrud');
const checkAddress=require('../../Utils/middleware/checkaddress')
const passwordEncryptor=require('../../Utils/passwordEncryptor');
const jwtVerification = require('../../Utils/jwt/jwtverify');
const config = require("../../Utils/statusconfig");
//const cartObject=require("../../models/setterGetter/cartmodel");
const checkQuantity=require('../../Utils/middleware/checkQuantity');
const cartOperations = require('../../db/crudOperations/cartCrud');
const respmsg= require('../../Utils/comments');
const checkOrder=require('../../Utils/middleware/checkOrder');
const delLevelCrud=require('../../db/crudOperations/delivLevelCrud');
const checkpaytm =require('../../Utils/paytm/paytmCrud');
const async=require('async');
const host=require('../../Utils/config').host;
const qs = require('querystring');
const path =require('path');
const port=process.env.PORT||1234;



customerRoutes.post('/checkOrderAddressOTP',jwtVerification.custverifyToken,(req,res)=> {
    // let stackTrace=req.body.stackTrace;
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
            console.log(req.body);
    customerCrud.checkOrderAddressOTP(req.body.otp,req.body.secret,res);
}
})
})

customerRoutes.get('/createOrderAddressOTP',jwtVerification.custverifyToken,(req,res)=> {
    // let stackTrace=req.body.stackTrace;
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
    customerCrud.createOrderAddressOTP(authData.userobj,res);
}
})
})

customerRoutes.post('/cart/addProduct',jwtVerification.custverifyToken,checkQuantity,(req,res)=> {
    // let stackTrace=req.body.stackTrace;
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
          
            if(req.body.crud=='add') {
                
                cartOperations.addToCart(req.body.stackTrace,req.body.cartProduct,authData.userobj,res);
            }else{
                res.status(409).json({status:config.ERROR,message:'Not Valid Entry'});
            }
        }
    })
});

customerRoutes.get('/voucher/getVouchers',jwtVerification.custverifyToken,(req,res)=>{
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
           orderCrud.getAllVouchers(res);
        }})
})

customerRoutes.get('/cart/getCartData',jwtVerification.custverifyToken,(req,res)=>{
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
            cartOperations.getCartData(authData.userobj.customerId,res);
        }})
})

customerRoutes.post('/cart/deleteProduct',jwtVerification.custverifyToken,(req,res)=> {
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
            if(req.body.crud =='del'){
                let currentquantity = req.body.cartProduct.quantity;
                cartOperations.decreaseQuantity(req.body.cartProduct,authData.userobj,currentquantity,res);
            }

        }
});})

customerRoutes.post('/cart/deletecartProduct',jwtVerification.custverifyToken,(req,res)=> {
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
           console.log(req.body);
            if(req.body!=null){
                if(req.body.cartProductId!=null){
                    cartOperations.deleteParticularItem(req.body.cartProductId,authData.userobj,res);
                }
            }
        }})

});

customerRoutes.post('/setCurrAdd',jwtVerification.custverifyToken,(req,res)=> {
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
            if(req.body.addId!=null){
customerCrud.setCurrentAdd(authData.userobj,req.body.addId,res);
        }else{
            res.status(409).json({status:config.ERROR,message:'Null Entry'});
        
        }
    }
    })
})


customerRoutes.post('/cart/emptycart',jwtVerification.custverifyToken,(req,res)=> {
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
           console.log(req.body);
            if(req.body!=null){
              
                    let array= req.body.cartIdArray;
                    if(array!=null){
                    cartOperations.emptyWholeCart(array,authData.userobj,res);
                    }else{
                        res.status(409).json({status:config.EMPTY,message:'Empty cart'})
                    }
            }
        }})

});

customerRoutes.get('/getOngoingOrder',jwtVerification.custverifyToken,(req,res)=> { //get all incompleted orders of customer
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
        }else{
          //  console.log('here');
orderCrud.getOrder(authData.userobj,false,res);
        }
    })
})


customerRoutes.post('/getSTDelivDetails',(req,res)=>{
  
                   delivDetailCrud.getStandardDeliveryDetails(req.body.id,res);
    
})

customerRoutes.post('/getEXPDelivDetails',(req,res)=>{
   
                   delivDetailCrud.getExpressDeliveryDetails(req.body.id,res);
        
})

customerRoutes.post('/getSingleLevel',jwtVerification.custverifyToken,(req,res)=> {
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
            delLevelCrud.getDeliveryAndSingleLevel(req.body,res);
            
        }})})

customerRoutes.post('/order/orderSum',jwtVerification.custverifyToken,(req,res)=> {
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
          //  console.log('here');
orderCrud.orderSum(authData.userobj,req.body.voucherCode,res);
        }
    })
}),

customerRoutes.post('/paytm/callback',(req,res)=>{
    let returnobj=checkpaytm(req,null,null);
   // console.log(returnobj);
    if(returnobj.status=='S'){
        async.waterfall([
        orderCrud.setOrderAfterPayment(returnobj.data,res)
        ],(err,results)=>{
            if(err){
//console.log('here');
              //  res.redirect("/userPlan?paytmId="+ returnobj.data.ORDERID);
                res.redirect('/customer/orderStatus?id=' + returnobj.data.ORDERID);
            }else{
                // res.redirect("/userPlan?paytmId="+returnobj.data.ORDERID);
        res.redirect('/customer/orderStatus?' + results);
            }
        })
    }else{
        const query = qs.stringify({
            "paytmId":req.body.ORDERID
         });
        // console.log('here');
        res.redirect('/customer/orderStatus?' +query);
        // res.redirect("/userPlan?"+query);
    }
})

customerRoutes.post('/order/placeOrder',jwtVerification.custverifyToken,checkOrder,(req,res)=> {
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
          async.waterfall([
            orderCrud.addOrder(req.order,req.timeAndTypeSlot,authData.userobj,req)
          ],function(err,doc){
if(err){
    res.status({status:config.ERROR,messsage:err})
}else{
    if(req.order.paymentMethod=='OP'){
   // console.log(doc);
    let obj={
        orderId:req.order.orderId,
         payment:(req.order.payment).toString(),
         mobile_no:req.address.mobile_no,
         cburl: 'http://'+host+'/customer/proceedpayment'
    }

    let pr=checkpaytm(req,authData.userobj,obj);
    pr.then(returnobj=>{
        if(returnobj.status=='S'){
            res.status(200).json(returnobj);
        }else{
            res.status(409).json(returnobj);
        }
    }).catch(err=>{
        res.status(409).json(err);
    })
   
    }else{
        let obj={
            ORDERID:req.order.orderId,
             TXNID:req.order.transactionId,
             PAYMENTMODE:'COD'
        }
        async.waterfall([
   orderCrud.setOrderAfterPayment(obj,res)
],(err,results)=>{
    if(err){
        res.status(409).json({status:config.ERROR,message:err});
    }else{
       res.status(200).json({status:config.SUCCESS,isCOD:true,query:results});
    }
}
   )
}}
          })

          

   // orderCrud.addOrder(req.order,req.timeAndTypeSlot,authData.userobj,res);
}})
})
customerRoutes.post('/proceedpayment',(req,res)=>{

let url="http://"+host+"/customer/paytm/callback";
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<html>');
res.write('<head>');
res.write('<title>Paytm CheckOut Page</title>');
res.write('</head>');
res.write('<body>');
res.write('<center><h1>Please do not refresh this page...</h1></center>');
res.write('<form method="POST" action="' + url + '" name="paytm_form">');
for(var x in req.body){

    if(x!="CHECKSUMHASH"){
    res.write('<input type="hidden" name="' + x + '" value="' + req.body[x] + '">');
}
}
res.write('<input type="hidden" name="CHECKSUMHASH" value="' + req.body.CHECKSUMHASH + '">');
res.write('</form>');
res.write('<script type="text/javascript">');
res.write('document.paytm_form.submit();');
res.write('</script>');
res.write('</body>');
res.write('</html>');
res.end();
  
})


customerRoutes.post('/filldetails',jwtVerification.custverifyToken,checkAddress,(req,res)=>{
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
           // console.log(authData.userobj,req.addressobj,req.mobile_no)
        customerCrud.filldetails(authData.userobj,req.addressobj,req.isdefault,res)
        }
})
})
customerRoutes.post('/order/singleOrder',jwtVerification.custverifyToken,(req,res)=>{  //single order based on param
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
            orderCrud.getSingleOrder(req.body.orderId,authData.userobj,res);
       
        }
    })
    })

customerRoutes.get('/getAddressData',jwtVerification.custverifyToken,(req,res)=>{
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
          
            customerCrud.getCustomerAddress(authData.userobj,res);
        }
    })
})

customerRoutes.get('/getProfileData',jwtVerification.custverifyToken,(req,res)=>{
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
          
            customerCrud.getData(authData.userobj,res);
        }
    })
})


customerRoutes.post('/auth/login' ,async (req,res)=>{
let loginObj={'email':req.body.email,'password':req.body.password};
let userobj= await customerCrud.login(loginObj);
if(userobj!=null && userobj!='error'){
if(passwordEncryptor.verifyPassword(loginObj.password,userobj.password)==true){
    jwt.sign({userobj},jwtVerification.custSecurekey,{expiresIn:jwtVerification.custExpiryTime},(err,token)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:err})
        }else{
          //  console.log(__dirname)
        res.json({
            'custToken':token
         })
    }
    })
}else{
    res.status(500).json({status:config.ERROR,message:'Invalid Password/UserId'})
}


}else{
    res.status(500).json({status:config.ERROR,message:'No User Found'});
}
})


customerRoutes.get('/checkLogin',jwtVerification.custverifyToken,(req,res)=>{
    jwt.verify(req.custtoken,jwtVerification.custSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }else{
            res.status(200).json({status:config.SUCCESS,islogged:true});
        }})
})



customerRoutes.post('/auth/signup',async (req,res)=>{
    //console.log(req.body);
    let custClass=customer.customerModel;
     let custObj= new custClass();
for(let key in req.body.customerData){
    if(key=='password'){
custObj[key]=passwordEncryptor.generatePassHash(req.body.customerData[key],10);
    }
    else{
   custObj[key]=req.body.customerData[key];
}}
custObj.createdAt=Date.now();
let userobj = await customerCrud.signUp(custObj);



if( userobj!='error' &&  userobj!=null){
    if( userobj ==respmsg.isalreadypresent){
            res.status(409).json({status:config.ERROR,message:userobj})
        
    }else{
jwt.sign({ userobj },jwtVerification.custSecurekey,{expiresIn:jwtVerification.custExpiryTime},(err,token)=>{
    if(err){
        res.status(409).json({status:config.ERROR,message:err})
    }else{
    res.json({
        'custToken':token
     })}
})
}}
})



customerRoutes.get('/auth/fb',passport.authenticate('facebook',{ scope : ['email'] }));
customerRoutes.get('/auth/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: '/error'}),(req,res)=>{
    let userobj=req.user;
    jwt.sign({userobj},jwtVerification.custSecurekey,{expiresIn:jwtVerification.custExpiryTime},(err,token)=>{
        if(err){
            res.redirect('/error')
        }else{
            res.redirect("/customer/authenticate?custToken="+token);
            // res.redirect("/userPlan?auth="+token);
        }})
  });

customerRoutes.get('/auth/google',passport.authenticate('google',{scope:['profile','email']},{ failureRedirect: '/error' }));

// customerRoutes.get('/userPlan',(req,res)=>{
//     res.sendFile(path.join(__dirname, '..', '..', 'public','index.html'));
// })
customerRoutes.get('/dashboard',passport.authenticate('google',{ failureRedirect: '/error' }),function(req,res){
    let userobj=req.user;
    //console.log('inside dashboard');
    jwt.sign({userobj},jwtVerification.custSecurekey,{expiresIn:jwtVerification.custExpiryTime},(err,token)=>{
        if(err){
           res.redirect('/error');
        }else{
    
             res.redirect("/customer/authenticate?custToken="+token);
          
            // res.redirect("/userPlan?auth="+token);
         
        }})
});

module.exports=customerRoutes;