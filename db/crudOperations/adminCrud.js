const admin=require('../schemas/adminLoginSchema');
const empCrud= require('../schemas/empSchema');
const vendorSchema = require('../schemas/vendorSchema');
const async = require('async');
const config= require('../../Utils/statusconfig');
const delBoy=require('../schemas/delBoySchema');
const delModel=require('../../models/setterGetter/delBoy.model');
const idGen=require('../../Utils/idGenerator/idGen');
//-milan
const adminCrud={


createAdmin(obj){
return function(info,cb){
  admin.findOne({id:obj.id,name:obj.name},(err,doc)=>{
    if(err){
cb('DB Error');
    }else if(doc==null){
      let adminschema= new admin({
        id:idGen.idgenerator('AD'),
        name:obj.name,
        password:obj.password,
        activestatus:obj.activestatus
      })
adminschema.save(err=>{
  if(err){
cb('DB Error');
  }else{
    cb(null,{isCreated:true});
  }
})

    }else{
      cb('Already Admin Created with these details');
    }
  })
}
},

updateAdmin(obj){
  return function(info,cb){
    admin.findOneAndUpdate({id:obj.id},{$set:{name:obj.name,activestatus:obj.activestatus,password:obj.password}},(err,doc)=>{
      if(err){
     cb('DB Error');
      }else if(doc==null){
  cb('No Doc Found');
      }else{
        cb(null,{isUpdated:true})
      }
    })
  }
},

deleteAdmin(obj){
  return function(info,cb){
admin.findByIdAndDelete(obj._id,(err,doc)=>{
  if(err){
cb('DB Error');
  }else if(doc==null){
cb('No Doc Found ')
  }else{
cb(null,{isDeleted:true})
  }
})}
},

getAdmin(){
  return function(cb){
  admin.find({id:{$ne:'11'},name:{$ne:'admin'}},(err,doc)=>{
    if(err){
  cb('DB Error');
    }else{
  cb(null,doc)
    }
  })
}
  },



async login(object){
    var user=await admin.findOne({'id':object.id,'name':object.name,'activestatus':true});
          return user
},
getUnverifiedEmployees(res){
empCrud.find({isVerified:false ,isRejected:false},(err,users)=>{
  if(err){
res.status(401).json({'error':err});
  }
  else{
      res.json({'users':users});
  }
})
}
,
getVerifiedEmployees(res){
    empCrud.find({isVerified:true},(error,users)=>{
      if(error){
    res.status(401).json({'error':error});
      }
      else{
          res.json({'users':users});
      }
    })
    }
    ,
    getRejectedEmployees(){
      return function(cb){
empCrud.find({isRejected:true},(err,user)=>{
  if(err){
    return cb('DB Error');
  }else{
    cb(null,user);
  }
})
      }
     
     
      }
    ,


findAndUpdateEmployee(id,obj){
return function(cb){
  empCrud.findOneAndUpdate({id:id},{$set:obj},{new:true},(error,user)=>{
    if(error){
return  cb('DB Error');
    }else if(user==null){
 return   cb('No User found');
    }else{
     cb(null,user)
    }
  })
}
},

verifyVendorAndDeliveryBoy(id){
return function(user,cb){
  if(user.typeEmployee=='Vendor'){
    vendorSchema.findOneAndUpdate({id:user.id},{$set:{verified:true}},(err,vendordoc)=>{
      if(err){
     cb('DB Error');

      }else if(vendordoc==null){
        let vendorobj = new vendorSchema({
          id:user.id,
          name:user.name,
          sellproducts:[],
          isAvail:false,
          isloggedOnce:false,
          verified:true,
          pin_code:user.address.pin_code,
          location:{
            "type":"Point",
            "coordinates":[]
          }
        })
        vendorobj.save((err)=>{
          if(err){
       return  cb('DB Error');
          }else{
           cb(null,{'isVerified':true});
      }
    })
  }  else{
    cb(null,{'isVerified':true});
  }
})
}
  //create tuple in delboy collection if verified
   else if(user.typeEmployee=="delivery_Man"){
     let obj=new delModel();
     obj.empId=id;
     obj.verified=true;
     obj.location.coordinates=[0,0];
         delBoy.findOneAndUpdate({empId:id},{verified:true},(err,doc)=>{
           if(err){
            cb('DB Error');
          }else if(doc==null){
            delBoy.create(obj,(err)=>{
              if(err){
                cb('DB Error');
              }else{
              cb(null,{'isVerified':true})
              }
            })
          }else{
            cb(null,{'isVerified':true})
          }})}

}},
unverifyVendorAndDelboy(id){
return function(user,cb){
  if(user.typeEmployee=='Vendor'){
    vendorSchema.findOneAndUpdate({id:user.id},{$set:{verified:false}},(err,vendordoc)=>{
      if(err){
       cb('DB Error');
      }else if(vendordoc==null){
    cb('False Error');
      }else{
        cb(null,{'isVerified':false})
      }})
    }else if(user.typeEmployee=="delivery_Man"){
      delBoy.findOneAndUpdate({empId:id},{verified:false},(err,doc)=>{
        if(err){
         cb('DB Error');
       }else if(doc==null){
        cb('No User Present');
       }else{
       cb(null,{'isVerified':false})
       }
      })
    
   }else{
  cb(null,{'isVerified':false})
   }
}},
rejectVendorAndDelboy(id){
  return function(user,cb){
    if(user.typeEmployee=='Vendor'){
      vendorSchema.findOneAndUpdate({id:user.id},{$set:{verified:false}},(err,vendordoc)=>{
        if(err){
         cb('DB Error');
        }else{
          cb(null,{'isVerified':false})
        }})
      }else if(user.typeEmployee=="delivery_Man"){
        delBoy.findOneAndUpdate({empId:id},{verified:false},(err,doc)=>{
          if(err){
           cb('DB Error');
         }else{
         cb(null,{'isVerified':false})
         }
        })
      
     }else{
    cb(null,{'isVerified':false})
     }
  }},

    
    }

module.exports = adminCrud;