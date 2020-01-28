const express=require('express');
const empRoutes=express.Router();
const logger=require('../../Utils/winstonLogger');
const upload=require("../../Utils/multer/uploadFiless3");
const multer=require("multer");
const Otp=require('../../Utils/email/otpEmail/generateotp');
const empCrud=require('../../db/crudOperations/employee');
const idGen=require('../../Utils/idGenerator/idGen');
const nullChecker=require('../../Utils/nullChecker');
const refCodeGen=require('../../Utils/referralGen/referralCode');
const passwordEncryptor=require('../../Utils/passwordEncryptor');
const empschema = require('../../db/schemas/empSchema')
const accountCrud=require('../../db/crudOperations/accountsCrud');
const Emp=require("../../models/setterGetter/empSetGet");
const jwt= require('jsonwebtoken');
const checkAccount =require('../../Utils/middleware/checkAccount');
const jwtVerification = require('../../Utils/jwt/jwtverify');
 const config= require('../../Utils/statusconfig');
 const async = require('async');
 const host = require('../../Utils/config').host;
 const mailUser=require('../../Utils/email/otpEmail/contactusmail');
 const mailfn=require('../../Utils/email/verificationEmail/contactusmail');
 const checkConfirmStatus=require('../../Utils/middleware/checkConfirmedOrder');
 const delBoyCrud=require('../../db/crudOperations/delBoyCrud');
 const delDateStatusCrud= require('../../db/crudOperations/delivLevelCrud');
 const vendorCrud = require('../../db/crudOperations/vendorCrud');
 const checkEmpData=require('../../Utils/middleware/checkEmpData');
 const deliveryCrud= require('../../db/crudOperations/deliveryCrud');
 const checkpaytm=require('../../Utils/paytm/paytmCrud');
 const empIdGen=require('../../Utils/idGenerator/orderIdGen');
 const qs= require('querystring');
 const path=require('path');

 
//var empCrud=require("../../db/crudOperations/employee");

empRoutes.get('/checkLogin',jwtVerification.empverifyToken,(req,res)=>{
    jwt.verify(req.emptoken,jwtVerification.empSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
        }else{
          res.status(200).json({status:config.SUCCESS,isLogged:true,doc:authData});
        }})
})
empRoutes.get('/pendingOrders',jwtVerification.empverifyToken,(req,res)=>{
    
    jwt.verify(req.emptoken,jwtVerification.empSecurekey,(err,authData)=>{
        if(err){
            //console.log('here');
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
        }else{
            async.waterfall([
                vendorCrud.getPendingOrders(authData)
            ],(err,results)=>{
                if(err){
                    res.status(409).json({status:config.ERROR,message:err});
                }else{
                    res.status(200).json({status:config.SUCCESS,deliveries:results});
                }
            })
        }})
    })


empRoutes.get('/getEmpData',jwtVerification.empverifyToken,(req,res)=>{
    
    jwt.verify(req.emptoken,jwtVerification.empSecurekey,(err,authData)=>{
        if(err){
            //console.log('here');
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
        }else{
          //  //console.log(authData);
           async.parallel([
          empCrud.getEmployeeBasicData(authData)
           ],(err,results)=>{
               //console.log(err,results);
               if(err){
                   res.status(409).json({status:config.ERROR,message:err});
               }else{
                   res.status(200).json({status:config.SUCCESS,userdata:results[0]});
               }
           })
        }})
})
empRoutes.post('/setSellVendorOrderProducts',jwtVerification.empverifyToken,(req,res)=>{
    
    jwt.verify(req.emptoken,jwtVerification.empSecurekey,(err,authData)=>{
        if(err){
            //console.log('here');
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
        }else{
        async.parallel([
            vendorCrud.setVendorOrderProductsAndPrice(req.body.delobj),
            vendorCrud.setUnAcceptedOrderProducts(req.body.delobj)
        ],(err,results)=>{
            if(err){
                res.status(409).json({status:config.ERROR,message:err});
            }else{
                res.status(200).json({status:config.SUCCESS,isPushed:true});
            }
        })
        }})})
        empRoutes.get('/getAssignedOrder',jwtVerification.empverifyToken,(req,res)=>{
    
            jwt.verify(req.emptoken,jwtVerification.empSecurekey,(err,authData)=>{
                if(err){
                    //console.log('here');
                    res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
                }else{
                async.waterfall([
                    vendorCrud.getAssignedOrders(authData)
                ],(err,results)=>{
                    if(err){
                        res.status(409).json({status:config.ERROR,message:err});
                    }else{
                        res.status(200).json({status:config.SUCCESS,orders:results});
                    }
                })
                }})})
      


       empRoutes.post('/confirmOrderReady',jwtVerification.empverifyToken,checkAccount,checkConfirmStatus,(req,res)=>{
    
        jwt.verify(req.emptoken,jwtVerification.empSecurekey,(err,authData)=>{
            if(err){
                //console.log('here');
                res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
            }else{
               async.waterfall([
                   delDateStatusCrud.getLastDelLevel(req.body.delobj.deliveryId),
                   vendorCrud.setVendorDelDate(req.body.delobj),
                   deliveryCrud.setDeliveryLevel(req.body.delobj),
                   accountCrud.addAccountData(req.body.delobj),
                   delDateStatusCrud.setDynamicDelForwardStatus(),
                   vendorCrud.confirmOrderReady(req.body.delobj)
                 
                   
               ],(err,results)=>{
                if(err){
                    res.status(409).json({status:config.ERROR,message:err});
                }else{
                    res.status(200).json({status:config.SUCCESS,isUpdated:true});
                }
               })


            }
        })
        
    })

// empRoutes.post('/delBoyAccept',jwtVerification.empverifyToken,checkAccount,(req,res)=>{
//     jwt.verify(req.emptoken,jwtVerification.empSecurekey,(err,authData)=>{
//         if(err){
//             //console.log('here');
//             res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
//         }else{
//            async.waterfall([
//     delDateStatusCrud.getLastDelLevel(req.body.delobj.deliveryId),
//     delBoyCrud.setDelBoyDelDate(req.body.delobj),
//     delDateStatusCrud.setDynamicDelForwardStatus(),
    
//            ],(err,results)=>{
//             if(err){
//                 res.status(409).json({status:config.ERROR,message:err});
//             }else{
//                 res.status(200).json({status:config.SUCCESS,isUpdated:true});
//             }
//            })
//         }
//         })
//         })


empRoutes.post('/getVendorOrderedProducts',jwtVerification.empverifyToken,(req,res)=>{
    
    jwt.verify(req.emptoken,jwtVerification.empSecurekey,(err,authData)=>{
        if(err){
            //console.log('here');
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
        }else{
            console.log(req.body);
        async.waterfall([
            vendorCrud.getOrderedProducts(req.body.delobj)
        ],(err,results)=>{
            if(err){
                res.status(409).json({status:config.ERROR,message:err});
            }else{
                res.status(200).json({status:config.SUCCESS,products:results});
            }
        })
        }})})

empRoutes.post('/setStatus',jwtVerification.empverifyToken,(req,res)=>{
    
    jwt.verify(req.emptoken,jwtVerification.empSecurekey,(err,authData)=>{
        if(err){
            //console.log('here');
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
        }else{
        async.waterfall([
        vendorCrud.setOnlineStatus(authData,req.body.status)
        ],err=>{
            if(err){
                res.status(409).json({status:config.ERROR,message:err});
            }else{
                res.status(200).json({status:config.SUCCESS,statusset:req.body.status,isUpdated:true});
            }
        })
        } 
    })
})

empRoutes.get('/vendorLoginStatus',jwtVerification.empverifyToken,(req,res)=>{
    
    jwt.verify(req.emptoken,jwtVerification.empSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
    
        }else{
            async.waterfall([
           vendorCrud.checkLoginStatus(authData)
            ],(err,doc)=>{
                if(err){
                    res.status(409).json({status:config.ERROR,message:err});
            }else{
                res.status(200).json({status:config.SUCCESS,isFound:true,doc:doc})
            }
            })
        }
    })
})


empRoutes.get('/readyOrders',jwtVerification.empverifyToken,(req,res)=>{
    
    jwt.verify(req.emptoken,jwtVerification.empSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
    
        }else{
            async.waterfall([
           vendorCrud.getReadyOrders(authData)
            ],(err,doc)=>{
                if(err){
                    res.status(409).json({status:config.ERROR,message:err});
            }else{
                res.status(200).json({status:config.SUCCESS,isFound:true,doc:doc})
            }
            })
        }
    })
})


empRoutes.post('/login',(req,res)=>{
   // //console.log(req.body);
        var object={'email':req.body.email,'password':req.body.password, mobile_no:req.body.mobile_no};
       let response= empCrud.doLogin(object);
       response.then(empobj=>{
        if(empobj.status=='S'){
            let obj ={
                id:empobj.user.id,
                email:empobj.user.email,
                mobile_no:empobj.user.mobile_no
            }
            jwt.sign(obj,jwtVerification.empSecurekey,{expiresIn:jwtVerification.empExpiryTime},(err,token)=>{
                if(err){
                   // //console.log(err);
                    res.status(500).json({status:config.ERROR,message:'Session Error'});
                }else{
                        res.status(200).json({status:config.SUCCESS,empToken:token,id:empobj.user.id});
                }
            })   
        }else{
            res.status(409).json(empobj);
        }
       },err=>{
        res.status(409).json(err);
       })
});

empRoutes.post('/setSellPdAndStatus',jwtVerification.empverifyToken,(req,res)=>{
    jwt.verify(req.emptoken,jwtVerification.empSecurekey,(err,authData)=>{
        if(err){
            //console.log('here');
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
        }else{
    async.parallel([
        vendorCrud.setVendorGeoLocation(authData,req.body.coordinates),
        vendorCrud.setVendorProduct(authData,req.body.productList),
    empCrud.setLogStatus(authData,true),
    vendorCrud.setisLoginOnceStatus(authData,true)
    ],(err,results)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:err})
        }else{
            res.status(200).json({status:config.SUCCESS,isPushed:true});

        }
    })
    
}})
});

empRoutes.post('/createMobileOtp',(req,res)=>{
    mailUser(req.body.email,req.body.name).then(data=>{
        if(data!=null){
          //  console.log(data);
            res.status(200).json({status:config.SUCCESS,isCreated:true,
                timeRemain:data.timeRemain,secret:data.secret});
        }
     
    }),err=>{
        res.status(409).json({status:config.ERROR,message:err})
    };
    }
)
empRoutes.post('/checkMobileOtp',(req,res)=>{
    if(Otp.checkOtp(req.body.otp,req.body.secret)!=false){
  
        res.status(200).json({status:config.VALIDOTP,isValid:true});
    }else{
        res.status(409).json({status:config.INVALIDOTP,message:'Incorrect OTP'})
    }
    
    }
)

//--naveen
empRoutes.post('/register',checkEmpData,(req,res)=>{

      
       // //console.log(object);
      
       empCrud.doRegister(req.empobj,res);

});
empRoutes.post('/checkUser',(req,res)=>{
    //console.log(req.body.mobile_no);
    if(req.body.mobile_no!=null && req.body.email!=null){
        empschema.findOne({email:req.body.email,isVerified:true},(err,doc)=>{
            if(err){
                res.status(409).json(err);
                        }else if(doc!=null){
res.status(409).json({message:'User Already Exist'})
                        }else{
                            res.status(200).json({isPresent:false})
                        }
        })
    }else{
        res.status(409).json('Null Mobile No')
    }
})

empRoutes.post('/sendEmail',(req,res)=>{
    if(req.body.email!=null){
         async.waterfall([
             empCrud.sendEmail(req.body),
             mailfn(req.body)
         ],(err,result)=>{
             if(err){
                 res.status(409).json({status:config.ERROR,message:err});
             }else {
                 res.status(200).json({status:config.SUCCESS,result:result});
             }
         })
    }else{
        res.status(409).json({status:config.ERROR,message:'Provide Email'});
       
    }
})



empRoutes.get('/setEmailStatus',(req,res)=>{
    if(req.query.verifyId!=null){
        async.waterfall([
            empCrud.setEmailVerificationStatus(req.query.verifyId)
        ],(err,result)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<html>');
res.write('<head>');
res.write('<title>Email Verification</title>');
res.write('</head>');
res.write('<body>');
res.write('<div>');
            if(err){
           
            res.write("Error Occured "+err);
            }else{
            res.write('Email is verified you may proceed ahead in form');
            }
            res.write('</div>')
  res.write('</body>');
res.write('</html>');
res.end();
        })
       
    }

})


empRoutes.post('/paytm/callback',(req,res)=>{
    let returnobj=checkpaytm(req,null,null);

   // console.log(returnobj);
    if(returnobj.status=='S'){
    
     res.redirect('/employee/successRegistration');
    }else{
        const query = qs.stringify({
            "id":req.body.ORDERID
         });
        res.redirect('/error')
    }
})


empRoutes.post('/proceedpayment',(req,res)=>{

    let url="http://"+host+"/employee/paytm/callback";
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
      

}
)

empRoutes.post('/order/placeOrder',(req,res)=>{
   console.log(req.body);
    let obj={
        orderId:idGen.idgenerator('NB'),
         payment:(req.body.payment).toString(),
         mobile_no:req.body.userData.mobile_no,
         cburl: 'http://'+host+'/employee/proceedpayment'
    }


    let pr=checkpaytm(req,{customerId:req.body.userData.uid},obj);
    pr.then(returnobj=>{
        if(returnobj.status=='S'){
            res.status(200).json(returnobj);
        }else{
            res.status(409).json(returnobj);
        }
    }).catch(err=>{
        res.status(409).json(err);
    })
   
})


empRoutes.post('/checkEmailVerification',(req,res)=>{
    if(req.body.email!=null){
        async.waterfall([
            empCrud.checkEmailVerifyStatus(req.body)
        ],(err,results)=>{
            if(err){
res.status(409).json({status:config.ERROR,message:err});
            }else{
res.status(200).json({status:config.SUCCESS,result:results});
            }
        })
    
        
    }else{
        res.status(409).json('Please Send Email Address')
    }
})

//--naveen
empRoutes.post("/upload",(req,res)=>{

    
            upload.upload(req,res,function(err){
                if(err instanceof multer.MulterError){
                //    //console.log("hi"+err);
                    logger.debug('multer error occured',err);
                    res.status(500).json(err);
                }
                else if(err){
               ////console.log(err);
                    logger.debug('some error occured',err);
                    res.status(500).json(err);
        
                    
                }else{
                
              //  //console.log(req.files);
              //  //console.log("trying to upload file");
                logger.debug('trying to upload files');
                //console.log(req.files);
                if(req.files!=null){
                upload.files.imageUrls.forEach(uploadObj=>{
                for(let ukeys in uploadObj){
                  
                   for(let key in req.files){
                    if(key==ukeys){
                        uploadObj[ukeys]={url:null,key:null};
                    uploadObj[ukeys].url=req.files[key][0].location; 
                    uploadObj[ukeys].key=req.files[key][0].key; 
                }
          
              };
        }
        })
                 
                }
               
               // upload.files.id=req.files;
               upload.files.id=empIdGen.generateId(req.body.mobile_no);
               if(upload.files.id==null){
                   res.status(500).json("please provide the mobile no");
               }
               else{
               //console.log(upload.files);
               
                res.json(upload.files);
               }   
            }         
    
        
         
            })
        
      
}); 
    
    
module.exports=empRoutes;