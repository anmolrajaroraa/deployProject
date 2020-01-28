const RoleSchema = require('../schemas/roleSchema');
const idGen=require('../../Utils/idGenerator/idGen');

const roleCrud={

    isSuperAdmin(){
      return function(info,cb){
          RoleSchema.findOne({roleId:info.roleId , roleName:"SuperAdmin"},(err,doc)=>{
              if(err){
                cb('DB Error')
              }else if(doc==null){
cb('Not Eligible For This feature');
              }else{
                  cb(null,{isSuperAdmin:true});
              }
          })
      }
    },

    getAllRoles(obj){
        return function(info,cb){
            RoleSchema.find(obj,(err,docs)=>{
                if(err){
             cb('DB Error');
                }else {
               cb(null,docs)
                }
            })
        }
    },

// updateRightsOfTheRole(obj){
// return function(cb){
//     RoleSchema.findOneAndUpdate({roleId:obj.roleId},{$set:{rights:obj.rights}},{new:true},(err,doc)=>{
//         if(err){
//   cb('DB Error');
//         }else if(doc==null){
//   cb('No Doc Found')
//         }else{
//     cb(null,doc);
//         }
//     })
// }
// }
    
getRole(obj){
    return function(cb){
        RoleSchema.findOne({roleId:obj.roleId,active:true},(err,doc)=>{
            if(err){
cb('DB Error');
            }else if(doc==null){
cb('No Role Found');
            }else {
                cb(null,doc);
            }
        })
    }
}
    ,
    createRole(obj){
        return function(info,cb){
  RoleSchema.findOne({roleName:obj.roleName},(err,doc)=>{
        if(err){
cb('DB Error');
        }else if(doc==null){
            
         let schema = new RoleSchema({
            roleId:idGen.idgenerator('RO'),
            roleDesc:obj.roleDesc,
            roleName:obj.roleName,
            active:obj.active,
         }) 
         schema.save(err=>{
             if(err){
    cb('DB Error');
             }else{
   cb(null,{isCreated:true});
             }
         })

        }else{
            cb(null,{override:true});
        }
    }
  
  )}
    },
    updateRole(obj){
return function(info,cb){
    RoleSchema.findOneAndUpdate({_id:obj._id},{$set:{
        roleDesc:obj.roleDesc,
        roleName:obj.roleName,
        active:obj.active
        }},(err,doc)=>{
            if(err){
            
                cb('DB Error');
            }else if(doc==null){
                cb('No Doc Found');
            }else{
                cb(null,{isUpdated:true});
            }
        })}

    },
    deleteRole(obj){
return function(info,cb){
    RoleSchema.findOneAndDelete({_id:obj._id},(err,doc)=>{
        if(err){
            cb('DB Error');
        }else if(doc==null){
cb('No Doc Found To Be Deleted');
        }else{
            cb(null,{isDeleted:true});
        }
    })
}
    }


}

module.exports=roleCrud;