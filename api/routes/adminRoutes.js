const express=require('express');
const adminRoutes=express.Router();
const logger=require('../../Utils/winstonLogger');
const jwt=require('jsonwebtoken');
const multer=require('multer');
const RoleAdminMap=require('../../db/crudOperations/roleAdminMapCrud');
const RoleRightMap=require('../../db/crudOperations/roleRightMap');
const config= require('../../Utils/statusconfig');
const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json-lc");
const nullChecker=require('../../Utils/nullChecker');
const adcrud = require('../../db/crudOperations/adCrud');
const delDateStatusCrud=require('../../db/crudOperations/delivLevelCrud');
const upload=require('../../Utils/multer/commonExcelUpload');    //requiring multer for excel upload
const upload2=require('../../Utils/multer/productImagess3');   //requiring multer s3 for image upload
const adupload = require('../../Utils/multer/adImageFiles');
const jwtVerification = require('../../Utils/jwt/jwtverify');      //secret key of webtokens
const productCrud=require('../../db/crudOperations/Product'); 
const adminCrud=require('../../db/crudOperations/adminCrud');
const s3=require('../../Utils/multer/getImageFiles');
const addressCrud=require('../../db/crudOperations/addressCrud');
const aboutUsOperations=require('../../db/crudOperations/aboutUsCrud');
const addressModel=require('../../models/addressModel');
const aboutObject=require('../../models/setterGetter/aboutUs');
const SubTitleModel=require('../../models/subTitleModel');
const singleUpload=upload.single('address');
const rightCrud=require('../../db/crudOperations/rightsCrud');
const roleCrud=require('../../db/crudOperations/roleCrud');
const footerOperations = require('../../db/crudOperations/footerOperations');
const footerObject=require('../../models/footermodel');
const titleListModel=require('../../models/titlelistmodel');
const titlefootermodel=require('../../models/titlefootermodel');
const delivLevCrud= require('../../db/crudOperations/delivLevelCrud');
const orderCrud = require('../../db/crudOperations/orderCrud');
const customerCrud=require('../../db/crudOperations/customerCrud');
const joins=require('../../Utils/productJoins');
const accountCrud=require('../../db/crudOperations/accountsCrud');
const idGen=require('../../Utils/idGenerator/idGen');
const async = require('async');
const delBoyCrud=require('../../db/crudOperations/delBoyCrud')
const orderJointCrud=require('../../db/crudOperations/orderJointCrud');
const moment= require('moment');
const mailfn= require('../../Utils/email/verificationEmail/contactusmail')
const vendorCrud=require('../../db/crudOperations/vendorCrud');
const timeSlotCrud= require('../../db/crudOperations/timeSlotCrud');
const deliveryOrderCrud= require('../../db/crudOperations/deliveryCrud');
const checkSuperAdminConflict= require('../../Utils/middleware/checkNotSuperAdmin');
const multipleUpload=upload.fields([
    {
      name:'categories'
    },
    {
      name:'subcategories'
    },                                 //keys of files incoming
    {
      name:'products'
    },
    {
      name:'subproducts'
    },{
        name:'priceAndAmount'
    }
    ]);        



    adminRoutes.get('/checkLogin',jwtVerification.adminverifyToken,(req,res)=>{
        jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(err,authData)=>{
            if(err){
                res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
            }else{
                res.status(200).json({status:config.SUCCESS,islogged:true});
            }
            })
        })
      
adminRoutes.get('/getDelivLevels',(req,res)=>{
 delivLevCrud.getdelivLevels(res);
})

adminRoutes.post('/addDelivLevel',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
        }else{
           let delivobj= req.body.delivlevobj;
            delivLevCrud.adddelivLevel(delivobj,res);
        }
    })
})
adminRoutes.post('/editDelivLevel',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
        }else{
           let delivobj= req.body.delivlevobj;
            delivLevCrud.editdelivLevel(delivobj,res);
        }
    })
})


adminRoutes.post('/deleteDelivLevel',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(err,authData)=>{
        if(err){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'})
        }else{
           let delivobj= req.body.delivlevobj;
            delivLevCrud.deletedelivLevel(delivobj,res);
        }
    })
})


//--naveen

adminRoutes.post('/upload',function(req,res){
    /* dont mess with multer the req above and below are not even same*/
    var xlsxj; //Initialization
   
    multipleUpload(req,res,async function(err){
        //jwt.verify(req.body.idToken,securekey,(error,authData)=>{     //checking if token is present or not
            //if(error){
            //    res.json("session timed out");
            //}
            //else{
        if(err instanceof multer.MulterError){  
            console.log(err);
        }else if(err){
            //console.log(req.file)
            res.json(err);    
        }
        //console.log(req.files);
        if(req.files.categories[0].originalname.split('.')[req.files.categories[0].originalname.split('.').length-1] === 'xlsx'){
            xlsxj = xlsxtojson;
        } else {
            xlsxj = xlstojson;
        }

        try {
            var categories=[];
            var subcategory=[];
            var products=[];
            var subProducts=[];
            var priceAndAmount=[];
            for(let key in req.files){
                //console.log(key);
            var pr=await new Promise(function(resolve,reject){
            xlsxj({
                input: req.files[key][0].path, 
                output: null,
                lowerCaseHeaders:true
            }, function(err,result){
                if(err) {
                    // return new Promise(function(resolve,reject){
                    //     reject({msg:'some error occured'});
                    // })
                    reject('some error occured');
                    res.json({error_code:1,err_desc:err, data: null});
                } 
                if(result!=null){
                   // productCrud.uploadProducts(req,res,result);
                    //console.log(result);
                    if(key=='categories'){
                        
                        for(let category of result){
                            let category1={
                                categoryId:category.categoryid,
                                categoryName:category.categoryname,
                                childIds:[],
                                subcategory:[]
                            }
                            category1.childIds=convertArray(category.childids);
                            categories.push(category1);
                            //console.log(categories);
                        }
                    }
                    if(key=='subcategories'){
                        
                        for(let subcat of result){
                            let subcategory1={
                                subcategoryId:subcat.subcategoryid,
                                subcategoryName:subcat.subcategoryname,
                                childIds:[],
                                products:[]
                            }       //converted string into array and
                                    //defined structure
                            subcategory1.childIds=convertArray(subcat.childids);
                            subcategory.push(subcategory1);
                        }
                    }
                    if(key=='products'){
                        
                        for(let product of result){
                            let product1={
                                productId:product.productid,
                                productName:product.productname,
                                childIds:[],
                                subProducts:[]
                            }
                            product1.childIds=convertArray(product.childids);
                            products.push(product1);
                        }
                    }
                    if(key=='subproducts'){
                        
                        for(let subproduct of result){
                            let subproduct1={
                                subproductId:subproduct.subproductid,
                                subproductName:subproduct.subproductname,
                                categoryId:null,
                                subcategoryId:null,
                                productId:null,
                                info:{
                                    foodPreference:subproduct.foodPreference,
                                    isExpress:subproduct.isExpress,
                                    brand:subproduct.brand,
                                    storageAndUses:subproduct.storageAndUses,
                                    description:subproduct.description,
                                    benefitsAndUses:subproduct.benefitsanduses,
                                    priceAndAmount:[]
                                },
                            }
                            subProducts.push(subproduct1);
                        }
                    }
                    if(key=='priceAndAmount'){
                        priceAndAmount=result;
                    }
                    // return new Promise(function(resolve,reject){
                    //     console.log('returning promise');
                    //     resolve({msg: result});
                    // })
                    resolve('ok');

                }
                else{
                    reject('some error occured');
                }

                //productCrud.uploadProducts(req,res,obj);
                // result.forEach(obj=>{
                //     productCrud.uploadProducts(req,res,obj);                         //pushing objects to db after traversing
                // })
                
                //res.json({error_code:0,err_desc:null, data: result});
            });
            })
            //await wait(5000);

            }
            if(pr){

            // async.waterfall([
                
            // ])
            //console.log('join occured');
            //console.log(categories);
            //console.log(subcategory);
            //console.log(products);
            //console.log(subProducts);
            console.log(priceAndAmount);
            subProducts=joins.joinSubproducts(subProducts,priceAndAmount);
            //console.log(subProducts);
            //products=joinProducts(products,subProducts);
            //console.log(products);
            //subcategory=joinSubcategory(subcategory,products);
            //var finalJson=joinExcelData(categories,subcategory);
            //console.log(finalJson);
            //console.log("we were here1")
            subProducts=joins.createFieldsInSubProduct(categories,subcategory,products,subProducts);
            console.log(subProducts);
            //console.log(subProducts)
            productCrud.uploadProducts(req,res,categories,subcategory,products,subProducts);
            }
            

        } catch (e){
            console.log(e);
            res.json({error_code:1,err_desc:"Corupted excel file"});
        }
    //}
    //})
    })

        
   // })
    
});
adminRoutes.post('/admincustomerData',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }
        else{
    customerCrud.getCustomer(req.body.id,res);
}
})
})

adminRoutes.post('/setOrderLevel',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }
        else{
            delivLevCrud.setOrderLevel(req.body,res);
        }})})

adminRoutes.post('/currentOrders',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(409).json({status:config.ERROR,message:'Session TimeOut'});
        }
        else{
            let dateobj= req.body.date;
            orderCrud.getCurrentOrders(dateobj,res);

        }})
})

//--milan
adminRoutes.post('/getImagesUrl',(req,res)=>{
    let returnImagesArray={};
    for(let key of req.body.keyArray){
        console.log(key+' '+req.body.mobile_no+'.png',req.body.keyArray)
 let params={Bucket:'big-basket-bucket',Key:key+' '+req.body.mobile_no}; //seconds

 s3.getObject(params,(err,data)=>{
     if(err){
        returnImagesArray={};
     }
   else if(url!=null){
        console.log(url);
        returnImagesArray[key]=url;
    }
});
 
}
res.json({'Images':returnImagesArray});
}
)

//--naveen
adminRoutes.post('/editProducts',jwtVerification.adminverifyToken,(req,res)=>{
   
    
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.json("token not valid or session timed out");
        }
        else{
            //console.log("its here");
          // nullChecker.check(req.body.products,res);
            productCrud.editProducts(req,res);
        }
    })
    
})
//--naveen
adminRoutes.post('/editCategoryList',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(500).json("token not valid or session timed out");
        }
        else{
        //    console.log(req.body);
          //  nullChecker.check(req.body.categorylist,res);
            var categories=[];
            var subcategory=[];
            var products=[];
            var subProducts=[];
            for(let category of req.body.categorylist){
                //do this
                let catobj={categoryId:category.categoryId,
                        categoryName:category.categoryName,
                        childIds:category.childIds,
                        subcategory:[]
                    }
                categories.push(catobj);
              //  console.log(categories);
                for(let subcat of category.subcategory){
                    let subcatobj={subcategoryId:subcat.subcategoryId,
                        subcategoryName:subcat.subcategoryName,
                        childIds:subcat.childIds,
                        products:[]
                    };
                    subcategory.push(subcatobj);
                 //   console.log(subcategory);
                    for(let product of subcat.products){
                        let proobj={productId:product.productId,
                            productName:product.productName,
                            childIds:product.childIds,
                            subProducts:[]
                        };
                        products.push(proobj);
                    //    console.log('here');
                        for(let subproduct of product.subProducts){
                         //   console.log(subproduct);
                            let priceArray=[];
                                if(subproduct.info.priceAndAmount){ 
                                    for(let obj4 of subproduct.info.priceAndAmount){
                                         priceArray.push(obj4);
                                }}
                                let imageArray=[];
                                if(subproduct.imageUrls){
                                for(let obj5 of subproduct.imageUrls){
                                    let obj6={
                                        uri: obj5.uri,
                                        key: obj5.key
                                    }
                                    imageArray.push(obj6);
                                }}
                            let subproobj={
                                    categoryId:category.categoryId,
                                    subcategoryId:subcat.subcategoryId,
                                    productId:product.productId,
                                    categoryName:category.categoryName,
                                    subcategoryName:subcat.subcategoryName,
                                    productName:product.productName,
                                    subproductId:subproduct.subproductId,
                                    subproductName:subproduct.subproductName,
                                    info:{
                                        foodPreference:subproduct.info.foodPreference,
                                        isExpress:subproduct.info.isExpress,
                                        brand:subproduct.info.brand,
                                        storageAndUses:subproduct.info.storageAndUses,
                                        description:subproduct.info.description,
                                        benefitsAndUses:subproduct.info.benefitsAndUses,
                                        priceAndAmount:priceArray,
                                    },
                                    imageUrls:imageArray
                                }
                        subProducts.push(subproobj);
                 //       console.log(subProducts);
                        }
                    }
                }
            }
            subProducts=joins.createFieldsInSubProduct(categories,subcategory,products,subProducts);
            productCrud.uploadProducts(req,res,categories,subcategory,products,subProducts);
        }
    })
})
//--naveen
adminRoutes.post('/imageUpload',(req,res)=>{
  
            upload2(req,res,function(err){
                
                jwt.verify(req.body.idToken,jwtVerification.adminSecurekey,(error,authData)=>{
                    
                    if(error){
                    res.status(401).json("Session TimeOut ,Please login again");
                    }
                    else{
                        if(err){
                            res.status(401).json(err);
                        }else{

           //    console.log(req.body,req.file,req.body.files);
                 //push url to db
              //  console.log(req.file,req.body);
                    nullChecker.check(req.file,res);
                    var obj={"uri":req.file.location,'key':req.file.key};
                    if(req.file.location!=null && req.file!=null){
                    productCrud.imageUpload(req,res,obj);
                    }else{
                        res.json(401).json('No File Uploaded')
                    }
                 } }})
                })
            
                
})
//--milan

adminRoutes.post('/imageDelete',jwtVerification.adminverifyToken,(req,res)=>{
    console.log(req.body)
        jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
            
            if(error){
                res.status(401).json("Session TimeOut ,Please login again");
            }
            else{

            productCrud.deleteImageBackend(req,res);
        
            }})
        
    


})


adminRoutes.get('/getAllRights',jwtVerification.adminverifyToken,(req,res)=>{
    //  console.log('i  m unverifiied');
      jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
              
          if(error){
              res.status(401).json("Session TimeOut ,Please login again");
          }
          else{
              console.log(authData);
            async.waterfall([
               RoleAdminMap.getAdminRole(authData.adminData),
                roleCrud.isSuperAdmin(),
                rightCrud.getAllRights({})
            ],(err,doc)=>{
                if(err){
                   res.status(409).json({status:config.ERROR,message:err})
                }else{
                      res.status(200).json({status:config.SUCCESS,rights:doc})
                }
            })
           


          }})})

adminRoutes.post('/createRight',jwtVerification.adminverifyToken,(req,res)=>{
    //  console.log('i  m unverifiied');
      jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
              
          if(error){
              res.status(401).json("Session TimeOut ,Please login again");
          }
          else{
       
async.waterfall([
    RoleAdminMap.getAdminRole(authData.adminData),
    roleCrud.isSuperAdmin(),
rightCrud.createRight(req.body)
],(err,result)=>{
    if(err){
        res.status(409).json({status:config.ERROR,message:err})
     }else{
           res.status(200).json({status:config.SUCCESS,result:result})
     }
})
        }})
        })


        adminRoutes.post('/updateRight',jwtVerification.adminverifyToken,(req,res)=>{
            //  console.log('i  m unverifiied');
              jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                      
                  if(error){
                      res.status(401).json("Session TimeOut ,Please login again");
                  }
                  else{
                  
        async.waterfall([
            RoleAdminMap.getAdminRole(authData.adminData),
            roleCrud.isSuperAdmin(),
        rightCrud.updateRight(req.body)
        ],(err,result)=>{
            if(err){
                res.status(409).json({status:config.ERROR,message:err})
             }else{
                   res.status(200).json({status:config.SUCCESS,result:result})
             }
        })
                    
        
                }})
                })


                adminRoutes.post('/deleteRight',jwtVerification.adminverifyToken,(req,res)=>{
                    //  console.log('i  m unverifiied');
                      jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                              
                          if(error){
                              res.status(401).json("Session TimeOut ,Please login again");
                          }
                          else{
                          
                async.waterfall([
                    RoleAdminMap.getAdminRole(authData.adminData),
                    roleCrud.isSuperAdmin(),
                rightCrud.deleteRight(req.body),
                RoleRightMap.deleteRoleRightJointsofRight(req.body)
                ],(err,result)=>{
                    if(err){
                        res.status(409).json({status:config.ERROR,message:err})
                     }else{
                           res.status(200).json({status:config.SUCCESS,result:result})
                     }
                })
                
                        }})
                        })


                        adminRoutes.get('/getAllRoles',jwtVerification.adminverifyToken,(req,res)=>{
                            //  console.log('i  m unverifiied');
                              jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                      
                                  if(error){
                                      res.status(401).json("Session TimeOut ,Please login again");
                                  }
                                  else{
                                      console.log(authData);
                                    async.waterfall([
                                       RoleAdminMap.getAdminRole(authData.adminData),
                                        roleCrud.isSuperAdmin(),
                                      roleCrud.getAllRoles({roleName:{$ne:"SuperAdmin"}})
                                    ],(err,doc)=>{
                                        if(err){
                                           res.status(409).json({status:config.ERROR,message:err})
                                        }else{
                                              res.status(200).json({status:config.SUCCESS,roles:doc})
                                        }
                                    })
                                   
                        
                        
                                  }})})
                        
                        adminRoutes.post('/createRole',jwtVerification.adminverifyToken,checkSuperAdminConflict,(req,res)=>{
                            //  console.log('i  m unverifiied');
                              jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                      
                                  if(error){
                                      res.status(401).json("Session TimeOut ,Please login again");
                                  }
                                  else{
                               
                        async.waterfall([
                            RoleAdminMap.getAdminRole(authData.adminData),
                            roleCrud.isSuperAdmin(),
                        roleCrud.createRole(req.body)
                        ],(err,result)=>{
                            if(err){
                                res.status(409).json({status:config.ERROR,message:err})
                             }else{
                                   res.status(200).json({status:config.SUCCESS,result:result})
                             }
                        })
                                }})
                                })
                        
                        
                                adminRoutes.post('/updateRole',jwtVerification.adminverifyToken,checkSuperAdminConflict,(req,res)=>{
                                    //  console.log('i  m unverifiied');
                                      jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                              
                                          if(error){
                                              res.status(401).json("Session TimeOut ,Please login again");
                                          }
                                          else{
                                          
                                async.waterfall([
                                    RoleAdminMap.getAdminRole(authData.adminData),
                                    roleCrud.isSuperAdmin(),
                                roleCrud.updateRole(req.body)
                                ],(err,result)=>{
                                    if(err){
                                        res.status(409).json({status:config.ERROR,message:err})
                                     }else{
                                           res.status(200).json({status:config.SUCCESS,result:result})
                                     }
                                })
                                            
                                
                                        }})
                                        })
                        
                        
                                        adminRoutes.post('/deleteRole',jwtVerification.adminverifyToken,(req,res)=>{
                                            //  console.log('i  m unverifiied');
                                              jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                                      
                                                  if(error){
                                                      res.status(401).json("Session TimeOut ,Please login again");
                                                  }
                                                  else{
                                                  
                                        async.waterfall([
                                            RoleAdminMap.getAdminRole(authData.adminData),
                                            roleCrud.isSuperAdmin(),
                                        roleCrud.deleteRole(req.body),
                                        RoleAdminMap.deleteAllAdminRoleMapofThisRole(req.body),
                                        RoleRightMap.deleteRoleRightJointofRole(req.body)
                                        ],(err,result)=>{
                                            if(err){
                                                res.status(409).json({status:config.ERROR,message:err})
                                             }else{
                                                   res.status(200).json({status:config.SUCCESS,result:result})
                                             }
                                        })
                                        
                                                }})
                                                })
                                                adminRoutes.post('/getRolesRight',jwtVerification.adminverifyToken,(req,res)=>{
                                                    //  console.log('i  m unverifiied');
                                                      jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                                              
                                                          if(error){
                                                              res.status(401).json("Session TimeOut ,Please login again");
                                                          }
                                                          else{
                                                          
                                                async.waterfall([
                                                RoleRightMap.getRightsofRole(req.body)
                                             
                                                ],(err,result)=>{
                                                    if(err){
                                                        res.status(409).json({status:config.ERROR,message:err})
                                                     }else{
                                                           res.status(200).json({status:config.SUCCESS,rights:result})
                                                     }
                                                })
                                                
                                                        }})
                                                        })
                                                   
                                                        adminRoutes.post('/changeAdminRole',jwtVerification.adminverifyToken,(req,res)=>{
                                                            //  console.log('i  m unverifiied');
                                                              jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                                                      
                                                                  if(error){
                                                                      res.status(401).json("Session TimeOut ,Please login again");
                                                                  }
                                                                  else{
                                                                  
                                                        async.waterfall([
                                                            RoleAdminMap.getAdminRole(authData.adminData),
                                                            roleCrud.isSuperAdmin(),
                                                    RoleAdminMap.deleteRightAdminJoint(req.body),
                                                    RoleAdminMap.createRoleAdminJoint(req.body)
                                                     
                                                        ],(err,result)=>{
                                                            if(err){
                                                                res.status(409).json({status:config.ERROR,message:err})
                                                             }else{
                                                                   res.status(200).json({status:config.SUCCESS,result:result})
                                                             }
                                                        })
                                                        
                                                                }})
                                                                })
                        
                        
                                                adminRoutes.post('/addRoleRightMap',jwtVerification.adminverifyToken,(req,res)=>{
                                                    //  console.log('i  m unverifiied');
                                                      jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                                              
                                                          if(error){
                                                              res.status(401).json("Session TimeOut ,Please login again");
                                                          }
                                                          else{
                                                          
                                                async.waterfall([
                                                    RoleAdminMap.getAdminRole(authData.adminData),
                                                    roleCrud.isSuperAdmin(),
                                                RoleRightMap.createRoleRightJoint(req.body)
                                             
                                                ],(err,result)=>{
                                                    if(err){
                                                        res.status(409).json({status:config.ERROR,message:err})
                                                     }else{
                                                           res.status(200).json({status:config.SUCCESS,result:result})
                                                     }
                                                })
                                                
                                                        }})
                                                        })
                        
                                                        adminRoutes.post('/deleteRoleRightMap',jwtVerification.adminverifyToken,(req,res)=>{
                                                            //  console.log('i  m unverifiied');
                                                              jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                                                      
                                                                  if(error){
                                                                      res.status(401).json("Session TimeOut ,Please login again");
                                                                  }
                                                                  else{
                                                                  
                                                        async.waterfall([
                                                            RoleAdminMap.getAdminRole(authData.adminData),
                                                            roleCrud.isSuperAdmin(),
                                                    
                                                        RoleRightMap.deleteRightRoleJoint(req.body)
                                                     
                                                        ],(err,result)=>{
                                                            if(err){
                                                                res.status(409).json({status:config.ERROR,message:err})
                                                             }else{
                                                                   res.status(200).json({status:config.SUCCESS,result:result})
                                                             }
                                                        })
                                                        
                                                                }})
                                                                })
                                                
       adminRoutes.post('/createAdmin',jwtVerification.adminverifyToken,(req,res)=>{
                                                                    //  console.log('i  m unverifiied'
       jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                                                              
                     if(error){
            res.status(401).json("Session TimeOut ,Please login again");
                           }
                       else{
                                                                          
             async.waterfall([
                RoleAdminMap.getAdminRole(authData.adminData),                                                           
                roleCrud.isSuperAdmin(),                                                   
               adminCrud.createAdmin(req.body)                                     
            ],(err,result)=>{                                            
                                                             
                if(err){
                    res.status(409).json({status:config.ERROR,message:err})
                 }else{                                                      
                                                                  
                    res.status(200).json({status:config.SUCCESS,result:result})
                }
           })
           
                   }})
                   })                                                           
                                                                
       adminRoutes.post('/updateAdmin',jwtVerification.adminverifyToken,(req,res)=>{
                                                                    //  console.log('i  m unverifiied'
       jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                                                              
                     if(error){
            res.status(401).json("Session TimeOut ,Please login again");
                           }
                       else{
                                                                          
             async.waterfall([
                RoleAdminMap.getAdminRole(authData.adminData),                                                           
                roleCrud.isSuperAdmin(),                                                   
                adminCrud.updateAdmin(req.body)                                         
            ],(err,result)=>{                                            
                                                             
                if(err){
                    res.status(409).json({status:config.ERROR,message:err})
                 }else{                                                      
                                                                  
                    res.status(200).json({status:config.SUCCESS,result:result})
                }
           })
           
                   }})
                   })     

             adminRoutes.post('/deleteAdmin',jwtVerification.adminverifyToken,(req,res)=>{
                                                                    //  console.log('i  m unverifiied'
       jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                                                              
                     if(error){
            res.status(401).json("Session TimeOut ,Please login again");
                           }
                       else{
                                                                          
             async.waterfall([
                RoleAdminMap.getAdminRole(authData.adminData),                                                           
                roleCrud.isSuperAdmin(),                                                   
                adminCrud.deleteAdmin(req.body)   ,
                RoleAdminMap.deleteRightAdminJoint(req.body)                                       
            ],(err,result)=>{                                            
                                                             
                if(err){
                    res.status(409).json({status:config.ERROR,message:err})
                 }else{                                                      
                                                                  
                    res.status(200).json({status:config.SUCCESS,result:result})
                }
           })
           
                   }})
                   })  
         adminRoutes.post('/getAdminRoleMap',jwtVerification.adminverifyToken,(req,res)=>{
                                                                    //  console.log('i  m unverifiied'
       jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                                                              
                     if(error){
            res.status(401).json("Session TimeOut ,Please login again");
                           }
                       else{
                                                                          
             async.waterfall([
               RoleAdminMap.getAdminRole(req.body)                                       
            ],(err,result)=>{                                            
                                                             
                if(err){
                    res.status(409).json({status:config.ERROR,message:err})
                 }else{                                                      
                                                                  
                    res.status(200).json({status:config.SUCCESS,result:result})
                }
           })
           
                   }})
                   })    

                       adminRoutes.get('/getAllAdmins',jwtVerification.adminverifyToken,(req,res)=>{
                                                                    //  console.log('i  m unverifiied'
       jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                                                              
                     if(error){
            res.status(401).json("Session TimeOut ,Please login again");
                           }
                       else{
                                                                          
             async.waterfall([
               adminCrud.getAdmin()                                       
            ],(err,result)=>{                                            
                                                             
                if(err){
                    res.status(409).json({status:config.ERROR,message:err})
                 }else{                                                      
                                                                  
                    res.status(200).json({status:config.SUCCESS,admins:result})
                }
           })
           
                   }})
                   })     
                       
                   
                   adminRoutes.get('/getRoleAndTheirRights',jwtVerification.adminverifyToken,(req,res)=>{
                                                                    //  console.log('i  m unverifiied'
       jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                                                              
                     if(error){
            res.status(401).json("Session TimeOut ,Please login again");
                           }
                       else{
                          async.waterfall([
                            RoleAdminMap.getAdminRole(authData.adminData),                                                        
                            roleCrud.isSuperAdmin(),
                            rightCrud.getAllRights({})

                          ],(err,rights)=>{
                              if(err){
                                async.waterfall([
                                    RoleAdminMap.getAdminRole(authData.adminData), 
                                    RoleRightMap.getRoleRight(),
                                    RoleRightMap.getRightsDesc()                                   
                                  ],(err,result)=>{                                            
                                                                                   
                                      if(err){
                                          res.status(409).json({status:config.ERROR,message:err})
                                       }else{                                                      
                                                                                        
                                          res.status(200).json({status:config.SUCCESS,rights:result,isSuperAdmin:false})
                                      }
                                 })

                              }else{
                                res.status(200).json({status:config.SUCCESS,rights:rights,isSuperAdmin:true})
                              
                              }
                          })
                                                                          
         
           
                   }})
                   })   


//--milan
adminRoutes.post('/login',async function(req,res){
    var adminData= await adminCrud.login({'id':req.body.id, 'name':req.body.name, 'password':req.body.password});
 //console.log(adminData)
 
     if(adminData!=null){
    if(req.body.password == adminData.password){
        jwt.sign({adminData},jwtVerification.adminSecurekey,{expiresIn:jwtVerification.adminExpiryTime},
            (err,token)=>{ 
            //token is generated after checking the presence of user
            if(err){
                res.status(500).json(err);
            }
            else{
res.json({
   token:token
})
}})}else{   
     res.status(401).json('Incorrect Password');

}}else{
    res.status(401).json('No Such Entry Found');
}

    })
      
//--milan
adminRoutes.get('/getUnverifiedEmployee',jwtVerification.adminverifyToken,(req,res)=>{
  //  console.log('i  m unverifiied');
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
            
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");
        }
        else{

   
    adminCrud.getUnverifiedEmployees(res);
        }})
})
//--milan

adminRoutes.get('/getVerifiedEmployee',jwtVerification.adminverifyToken,(req,res)=>{
   // console.log('i m here verify')
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
            
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");
        }
        else{

    adminCrud.getVerifiedEmployees(res);}})
})
adminRoutes.get('/getRejectedEmployee',jwtVerification.adminverifyToken,(req,res)=>{
    // console.log('i m here verify')
     jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
             
         if(error){
             res.status(401).json("Session TimeOut ,Please login again");
         }
         else{
 
     async.waterfall([
         adminCrud.getRejectedEmployees()
     ],(err,doc)=>{
         if(err){
             res.status(401).json({error:err});
         }else{
            res.json({'users':doc});
         }
     })
    }
})
    })
//--milan
adminRoutes.post('/verifyUser',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
            
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");
        }
        else{


    // adminCrud.verifyEmployee(req.body.id,res);
    async.waterfall([
        adminCrud.findAndUpdateEmployee(req.body.id,{isVerified:true,isRejected:false}),
        adminCrud.verifyVendorAndDeliveryBoy(req.body.id),
        mailfn(req.body)
    ],(err,results)=>{
        if(err){
            res.status(409).json({'error':err})
        }else{
            res.status(200).json(results);
        }
    })
}})
})
//--milan
adminRoutes.post('/unVerifyUser',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
            
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");
        }
        else{

   // adminCrud.unVerifyEmployee(req.body.id,res);
   async.waterfall([
       adminCrud.findAndUpdateEmployee(req.body.id,{isVerified:false}),
       adminCrud.unverifyVendorAndDelboy(req.body.id),
       mailfn(req.body)
   ],(err,results)=>{
       if(err){
           console.log(err);
           res.status(409).json({'error':err})
       }else{
           res.status(200).json(results);
       }
   })
}})

   
})

adminRoutes.post('/rejectUser',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
            
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");
        }
        else{

            async.waterfall([
                adminCrud.findAndUpdateEmployee(req.body.id,{isVerified:false,isRejected:true}),
                adminCrud.rejectVendorAndDelboy(req.body.id),
                mailfn(req.body)
            ],(err,results)=>{
                if(err){
                    console.log(err);
                    res.status(409).json({'error':err})
                }else{
                    res.status(200).json(results);
                }
            })
         }})
})
//--Milan
adminRoutes.post('/pushAd',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
            
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");
        }
        else{
        //    console.log('i m here');
           let obj ={'crud':req.body.crud,'data':req.body.data,'oldref':req.body.oldref};
   adcrud.pushAd(obj,res);
}
})
})
//--Milan
adminRoutes.post('/adImageAdd',(req,res)=>{
adupload(req,res,function(err){
    
    if(err){
        
        res.status(403).json('Upload Error')
    }else{
    
    var obj = {'crud':req.body.crud,'category':req.body.category,'label':req.body.label,'imageUrl':req.file.location ,'imagekey':req.file.key,'oldlabel':req.body.oldlabel};
   adcrud.imageCrud(obj,res);
    }
})
})

adminRoutes.post('/adDelete',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
            
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");
        }else{
       //  console.log(req.body.crud,req.body.category);
            var obj={'crud':req.body.crud,'data':req.body.category};
            adcrud.deleteAd(obj,res);
        }})
})

//operations for address management
adminRoutes.post('/bulkAddUpload',(req,res)=>{
    singleUpload(req,res,function(err){
        if(err instanceof multer.MulterError){
            console.log(err);
        }else if(err){
            //console.log(req.file)
            res.json(err);    
        }
        //console.log(req);
        if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
            exceltojson = xlsxtojson;
        } else {
            exceltojson = xlstojson;
        }

        try {
            exceltojson({
                input: req.file.path,
                output: null, //since we don't need output.json
                lowerCaseHeaders:true
            }, function(err,result){
                if(err) {
                    return res.json({error_code:1,err_desc:err, data: null});
                } 
                else if(result!=null){
              //  console.log(result);
                //do whatever you want
                var dataArr=[];
                for(let data of result){
                    let object={
                        city:data.city,
                        areaId:idGen.idgenerator(data.pincode),
                        areaName:data.areaname,
                        pincode:data.pincode,
                        status:data.status
                    }
                    dataArr.push(object)
                }
                addressCrud.addBulkAddress(res,dataArr);
                }
                //res.json({error_code:0,err_desc:null, data: result});
            });
        } catch (e){
            logger.debug('some error occured during adding new address inside multer');
            res.json({error_code:1,err_desc:"Corupted excel file"});
        }
    })
})

adminRoutes.post('/singleAddCrud',(req,res)=>{
    if(req.body.optype=='add'){
        // let object={
        //     city:req.body.city,
        //     areaId:idGen.idgenerator(req.body.pincode),
        //     areaName:req.body.areaName,
        //     pincode:req.body.pincode,
        //     status:req.body.status
        // }
        let object=new addressModel(req.body.city,idGen.idgenerator(req.body.pincode),
                        req.body.areaName,req.body.pincode,req.body.status);
        addressCrud.addAddress(res,object);
    }
    else if(req.body.optype=='delete'){
       
        let object=new addressModel(req.body.city,req.body.areaId,
                        req.body.areaName,req.body.pincode,req.body.status)
        addressCrud.deleteAddress(res,object);
    }
    else if(req.body.optype=='edit'){

        let object=new addressModel(req.body.city,req.body.areaId,
                        req.body.areaName,req.body.pincode,req.body.status)
        addressCrud.updateAddress(res,object);
    }
})
//footer data management by admin
adminRoutes.post('/saveabout',jwtVerification.adminverifyToken,(req,res)=> {
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
            
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");
        }else{
   // console.log(req.body);
    // for(let key in aboutObject) {
            // if(key=="aboutTitle"){
            let aboutTitle=aboutObject.aboutTitle;
            aboutTitle.titleName=req.body.titleName;
            let titleParagraph=aboutTitle.titleParagraph[0];
            titleParagraph.paragraph=req.body.titleParagraph.paragraph;
            titleParagraph.lists=req.body.titleParagraph.lists;
            let aboutSubTitle=aboutObject.aboutSubTitle;
            if(aboutSubTitle.length>0) {
                aboutSubTitle.length=0;
            }
            let bodyAboutSubTitle=req.body.aboutSubTitle;
                var subTitleName= bodyAboutSubTitle.subTitleName;
                var subTitleParagraphs= bodyAboutSubTitle.subTitleParagraphs;
                var objectSub=new SubTitleModel(subTitleName,subTitleParagraphs);
                aboutSubTitle.push(objectSub);
            
            // break;
        // }
    // }
    aboutUsOperations.uploadData(aboutObject,res);
    // aboutSubTitle.length=0;
        }})
});
adminRoutes.get('/getaboutdata',(req,res)=> {
    //console.log("Inside GetAbout")
    aboutUsOperations.getAboutData(res);
})



adminRoutes.post('/savefooter',jwtVerification.adminverifyToken,(req,res)=> {
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
            
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");
        }else{
    let titleFooterPrevious=footerObject.titleFooter;
    if(titleFooterPrevious.length>0) {
        titleFooterPrevious.length=0;
    }
    let titleFooter=req.body.titleFooter;
    titleFooter.forEach((eachFooterTitle)=> {
        let titleList=[];
        let titleName=eachFooterTitle.titleName;
        let titleListArray=eachFooterTitle.titleList;
        titleListArray.forEach((listItem)=> {
                for(let key in listItem) {
                    if(key=="listName"){
                        var listName=listItem[key];
                    }
                    else {
                        var listLink=listItem[key];
                    }
                }
                let listObject=new titleListModel(listName,listLink);
                titleList.push(listObject);
        });
        let titleFooterObject=new titlefootermodel(titleName,titleList);
        titleFooterPrevious.push(titleFooterObject);
    });
    footerOperations.uploadFooterData(footerObject,res);
        }})
});

adminRoutes.post('/getAddressofOrder',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");

        }
        else{
            async.waterfall([
                orderCrud.getOrderAddress(req.body.orderId)  
            
            ],(err,result)=>{
            if(err){
    res.status(401).json({status:config.ERROR,message:err});

 }else{
     res.status(200).json({status:config.SUCCESS,address:result});
 }
            })
        }      
    })
    })
adminRoutes.get('/getExpDelOrder',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");

        }
        else{
        let dateobj = new Date();
         if(moment.isDate(dateobj)==true){
        let obj={
            Date:dateobj.getDate(),
            Month:dateobj.getMonth(),
            Year:dateobj.getFullYear(),
            hour:parseInt(moment(dateobj).format('H')),
            ampm:moment(dateobj).format('A')
        }
  //  console.log(obj);
            async.waterfall([
                timeSlotCrud.getNearestTimeSlot(obj),
                deliveryOrderCrud.getEXPdetailsAsPerTimeSlot(obj)
            ],(err,result)=>{
                if(err){
                    res.status(409).json({status:config.ERROR,message:err})
                }else{
                    res.status(200).json({status:config.SUCCESS,doc:result});
                }
            })
     
        }else{
            console.log('Not A date');
        }}
    })
})

adminRoutes.get('/getStdDelOrder',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");  
        }
        else{
            let dateobj = new Date();
            if(moment.isDate(dateobj)==true){
           let obj={
               Date:dateobj.getDate(),
               Month:dateobj.getMonth(),
               Year:dateobj.getFullYear(),
               hour:parseInt(moment().format('H')), 
               ampm:moment(dateobj).format('A')
           }   
         //  console.log(obj);
            async.waterfall([
                timeSlotCrud.getNearestTimeSlot(obj),
                deliveryOrderCrud.getSTDdetailsAsPerTimeSlot(obj)
            ],(err,result)=>{
                if(err){
                    res.status(409).json({status:config.ERROR,message:err})
                }else{
                    res.status(200).json({status:config.SUCCESS,doc:result});
                }
            })
     
        }else{
            console.log('Not A date');
        }}
    })
})

adminRoutes.post('/addorEditTS',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");  
        }
        else{
            try{
                if(req.body.tsobj._id!=null){
                    async.waterfall([
                        timeSlotCrud.updateTimeSlot(req.body.tsobj),
                    ],(err,doc)=>{
                        if(err){
                            res.status(409).json({status:config.ERROR,message:err});
                        }else{
                            res.status(200).json({status:config.SUCCESS,isPushed:true})
                        }
    
                    })
                    
                }else{
                    async.waterfall([
                        timeSlotCrud.addTimeSlot(req.body.tsobj)
                    ],(err,doc)=>{
                        if(err){
                            res.status(409).json({status:config.ERROR,message:err});
                        }else{
                            res.status(200).json({status:config.SUCCESS,isAdded:true})
                        }
                    })
                }
            }
            catch(e){
        
                res.status(500).json({status:config.ERROR,message:'Server Error'});
            
                }
          
      
        }
    })
})

adminRoutes.post('/deleteTS',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");  
        }
        else{
            try{
                async.waterfall([
                    timeSlotCrud.deleteTimeSlot(req.body.tsobj_id)
                ],(err,doc)=>{
                    if(err){
                        res.status(409).json({status:config.ERROR,message:err});
                    }else {
                        res.status(200).json({status:config.SUCCESS,isDeleted:true});
                    }
                })
           
            }catch(e){
               // console.log(e);
                res.status(500).json({status:config.ERROR,message:'Server Error'});
            }
        }
        })
    })

adminRoutes.get('/vendorsearchByPin',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");  
        }
        else{
            console.log(req.query);
            async.waterfall([
                vendorCrud.searchVendorByPin(req.query.pin),
                orderJointCrud.checkIfvendorAlreadyHasDelId(req.query.delId)
            ],(err,docs)=>{
                if(err){
                    res.status(409).json({status:config.ERROR,message:err});
                }else{
                    res.status(200).json({status:config.SUCCESS,vendors:docs});
                }
            })
           
        } 
        })
    })
    
adminRoutes.get('/getAllocatedDelOrder',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");  
        }
        else{
            async.waterfall([
                orderJointCrud.getAllocatedVendorDeliveries(req.query.type)
            ],(err,result)=>{
                if(err){
                    res.status(409).json({status:config.ERROR,message:err});
                }else{
                    res.status(200).json({status:config.SUCCESS,deliveries:result});
                
                }
            })

        }})
    })

    adminRoutes.get('/getUnAcceptedDelOrder',jwtVerification.adminverifyToken,(req,res)=>{
        jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
            if(error){
                res.status(401).json("Session TimeOut ,Please login again");  
            }
            else{
            
            async.waterfall([
                orderJointCrud.getUnAcceptedDelOrders(req.query.type)
            ],(err,docs)=>{
                if(err){
                    res.status(409).json({status:config.ERROR,message:err});
                }else{
                    res.status(200).json({status:config.SUCCESS,deliveries:docs});
                
                }
            })
            
            }
        })
    })

adminRoutes.post('/getProducts',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");  
        }
        else{
         async.waterfall([
      vendorCrud.getOrderedProducts(req.body.delobj)
         ],(err,results)=>{
            if(err){
                res.status(409).json({status:config.ERROR,message:err});
            }else{
                res.status(200).json({status:config.SUCCESS,products:results});
            
            }
         })
        }
    })
})

adminRoutes.post('/allocateVendor',jwtVerification.adminverifyToken,(req,res)=>{
    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
        if(error){
            res.status(401).json("Session TimeOut ,Please login again");  
        }
        else{
            async.parallel([
                deliveryOrderCrud.setVendorAlloted(req.body.delobj),
                orderJointCrud.removeUnAcceptedDelOrders(req.body.delobj),
                orderJointCrud.addOrderJoint(req.body.delobj)
            ],(err,result)=>{
                if(err){
                    res.status(409).json({status:config.ERROR,message:err});
                }else{
                    res.status(200).json({status:config.SUCCESS,isPushed:result[2]});
                
                }
            })
         
        }})})
        adminRoutes.post('/setToReturnedSlot',jwtVerification.adminverifyToken,(req,res)=>{
            jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                if(error){
                    res.status(401).json("Session TimeOut ,Please login again");  
                }
                else{
                 //  console.log('herer',req.body.delobj);
                    async.waterfall([
                        orderJointCrud.checkIfVendorAccepted(req.body.delobj),
                        orderJointCrud.setToReturnedOrderSlot(),
                        orderJointCrud.removeOrderJoint(req.body.delobj)
                    ],(err,result)=>{
                        if(err){
                            if(err.isAccepted==true){
                                res.status(409).json({status:config.ERROR,isAccepted:true});
                            }else{
                                res.status(409).json({status:config.ERROR,message:err});
                            }
                        }else{
                            res.status(200).json({status:config.SUCCESS,isPushed:result});
                        
                        }
                    })
                 
                }})})



                adminRoutes.post('/autoOrderAllocation',jwtVerification.adminverifyToken,(req,res)=>{
                    jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                        if(error){
                            res.status(401).json("Session TimeOut ,Please login again");  
                        }
                        else{
                            console.log(req.body)
               let obj={
             deliveryId:req.body.deliveryId,
              vendorId:req.body.vendorId, 
         }

         delBoyCrud.autoOrderAllocation(res,obj)
           
                 }
                    })
                    })
                    adminRoutes.post('/preAllocatedDelBoy',jwtVerification.adminverifyToken,(req,res)=>{
                        jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                                
                            if(error){
                                res.status(401).json("Session TimeOut ,Please login again");
                            }
                            else{
                                async.waterfall([
                                    orderJointCrud.getPreAllocatedDelBoy(req.body),
                                    delBoyCrud.getDelBoy()
                                ],(err,results)=>{
                                    if(err){
                                        res.status(409).json({status:config.ERROR,message:err})
                                    }else{
                                        res.status(200).json({status:config.SUCCESS,doc:results});
                                    }
                                })
               
                            }})
                        })
                    

                    adminRoutes.post('/getUnpaidVendorAccounts',jwtVerification.adminverifyToken,(req,res)=>{
                        jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                            if(error){
                                res.status(401).json("Session TimeOut, Please login again");  
                            }
                            else{
                               console.log(req.body);
                                async.waterfall([
                                    accountCrud.getUnpaidVendorsAccount(req.body)
                                ],(err,results)=>{
                                    if(err){
                                        res.status(409).json({status:config.ERROR,message:err})
                                    }else{
                                        res.status(200).json({status:config.SUCCESS,accounts:results});
                                    }
                                })
                           
                            }})
                    })
                    
                    adminRoutes.post('/getUnpaidDelBoyAccounts',jwtVerification.adminverifyToken,(req,res)=>{
                        jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                            if(error){
                                res.status(401).json("Session TimeOut ,Please login again");  
                            }
                            else{
                               // console.log(req.query);
                                async.waterfall([
                                    accountCrud.getUnpaidDelBoyAccount(req.body)
                                ],(err,results)=>{
                                    if(err){
                                        res.status(409).json({status:config.ERROR,message:err})
                                    }else{
                                        res.status(200).json({status:config.SUCCESS,accounts:results});
                                    }
                                })
                           
                            }})
                    })
                        
                    adminRoutes.post('/setPayStatus',jwtVerification.adminverifyToken,(req,res)=>{
                        jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                            if(error){
                                res.status(401).json("Session TimeOut ,Please login again");  
                            }
                            else{
                                async.waterfall([
                                    accountCrud.setPayStatus(req.body)
                                ],(err,results)=>{
                                    if(err){
                                        res.status(409).json({status:config.ERROR,message:err})
                                    }else{
                                        res.status(200).json({status:config.SUCCESS,doc:results,updated:true});
                                    }
                                })
                           
                            }})
                    })




                  
                    

                    adminRoutes.post('/manualOrderAllocation',jwtVerification.adminverifyToken,(req,res)=>{
                        jwt.verify(req.admintoken,jwtVerification.adminSecurekey,(error,authData)=>{
                            if(error){
                                res.status(401).json("Session TimeOut ,Please login again");  
                            }
                            else{
                        var obj={
                            deliveryId:req.body.deldata.deliveryId,
                            vendorId:req.body.deldata.vendorId,
                            empId:req.body.delboy.empId
                        }
                    req.body.deldata.id=req.body.delboy.empId;
                    req.body.deldata.empType="DeliveryBoy";
                      
                            async.waterfall([
                            delDateStatusCrud.getLastDelLevel(req.body.deldata.deliveryId),
                            delBoyCrud.setDelBoyDelDate(req.body.deldata),
                            deliveryOrderCrud.setDeliveryLevel(req.body.deldata),
                            accountCrud.addAccountData(req.body.deldata),
                            delDateStatusCrud.setDynamicDelForwardStatus(),
                            delBoyCrud.acceptOrder(req.body.deldata,req.body.delboy)
                                   ],(err,results)=>{
                                    if(err){
                                        console.log(err);
                                        res.status(409).json({status:config.ERROR,message:err});
                                    }else{
                                        delBoyCrud.manualOrderAllocation(res,obj);       
                                    }
                                   })
                        
                    }})
                    })

  //--naveen
function convertArray(string){
    var array=[];
    array=string.split(' ');           //converting combined ids into array of ids
    console.log(array);
    return array;
}






module.exports=adminRoutes;