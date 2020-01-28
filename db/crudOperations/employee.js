const Emp=require("../schemas/empSchema");
const Uid=require("uuid/v1");
//const mailUser=require('../../Utils/email/nodemailer')
const passwordEncryptor=require('../../Utils/passwordEncryptor')
const config=require('../../Utils/statusconfig');
const idGen=require('../../Utils/idGenerator/idGen');
const emailVerificatinSchema=require('../schemas/emailVerificationSchema');

// //console.log(path.join(__dirname,'../../docUploads/policeVerification'));
// //console.log(__dirname);

const empCrud={
//milan
  async doLogin(object){
        
        try{
          let userdata=  await Emp.findOne({email:object.email,mobile_no:object.mobile_no,isVerified:true});

                if(!userdata){
                    return {status:config.ERROR,message:'No Such User Exist'};
                }
                else{
                    if(passwordEncryptor.verifyPassword(object.password,userdata.password)==true){
                    return {status:config.SUCCESS,user:userdata};
                    }else{
                        return {status:config.ERROR,message:"Incorrect Password"};
                    }
                }
        }
        
        catch(e){
          return {status:config.ERROR,message:'DB Error'};
               
        }
      
    },

    getEmployeeBasicData(object){
        return function(cb){
         Emp.findOne({email:object.email,mobile_no:object.mobile_no},(err,doc)=>{
             if(err){
                 return cb('DB Error');
             }else if(doc==null){
                 return cb('No User Found');
             }else{
                 //console.log(doc);
                 cb(null,doc);
             }
         })
        }
    },
//naveen
    setLogStatus(empobj,status){
        return function(cb){
     Emp.findOneAndUpdate({id:empobj.id},{$set:{ hasLoggedOnce:status}},(err,doc)=>{
         if(err){
             cb('DB Error');
         }else if(doc==null){
             cb('No User Found To Update')
         }else{
             cb(null,doc);
         }
     })
    }
    },

    doRegister(object,res){

       //console.log(object.id);
        //method to create objeccts in db
        Emp.findOne({email:object.email,isVerified:true},function(error,result){   //checking if record already exists
            if(error){
               res.status(500).json({status:config.ERROR,message:'DB Error'})
            }
            else if(result==null){
                Emp.create(object,(err)=>{
                    /*if(error!=null){   //file exist validation
                        res.json(error);
                    }*/
                    if(err){
                        res.status(500).json({status:config.ERROR,message:'DB Error'})          }   //error while uploading data to db
                    else{
                        //console.log("record created");
                        res.status(200).json({status:config.SUCCESS,isPresent:false})

                       // mailUser(object.email,object.name);
                    }    
                    
                    });
            }
            else{
                res.status(200).json({status:config.ERROR,isPresent:true});
             
            }     
        })
        
    },

sendEmail(obj){
    return function(cb){
 let emailschema =  new emailVerificatinSchema({
        email:obj.email,
        verifyId:idGen.idgenerator(obj.email),
        isVerified:false
    })

    emailschema.save(err=>{
        if(err){
            cb('DB Error');

        }else{
            return cb(null,emailschema)
        }
    })}
    
}
    ,
setEmailVerificationStatus(id){
    return function(cb){
        emailVerificatinSchema.findOneAndUpdate({verifyId:id},{$set:{isVerified:true}},(err,doc)=>{
            if(err){
cb('DB Error');
            }else if(doc==null){
cb('No Email Account Found');
            }else{
cb(null,true);
            }
        })
    }
}
    ,

 checkEmailVerifyStatus(user){
     return function(cb){
         emailVerificatinSchema.findOne({email:user.email,isVerified:true,verifyId:user.verifyId},(err,doc)=>{
             if(err){
cb('DB Error');
             }else if(doc==null){
cb('Please Verify Email Address');
             }else{
         cb(null,true);
             }
         })
     }
 }

}




module.exports=empCrud;