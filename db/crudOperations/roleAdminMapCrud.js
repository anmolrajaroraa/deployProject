const async= require('async');
const rightSchema = require('../schemas/rightSchema');
const RoleAdminSchema = require('../schemas/adminRoleSchema');
const RoleAdminMap={

    getAdminRole(obj){
        return function(cb){
            RoleAdminSchema.findOne({id:obj.id},(err,doc)=>{
                if(err){
        cb('DB Error');
                }else {
               cb(null,doc);
                }
            })
        }
        }
        ,
            createRoleAdminJoint(obj){
            return function(info,cb){
                RoleAdminSchema.findOne({id:obj.id,roleId:obj.roleId},(err,doc)=>{
                    if(err){
        cb('DB Error');
                    }else if(doc==null){
                     let schema = new RoleAdminSchema({
                         id:obj.id,
                         roleId:obj.roleId
                     })
        
                     schema.save(err=>{
                         if(err){
                       cb('DB Error');
                         }else{
        cb(null,{isCreated:true});
                         }
                     })
                    }else{
                 cb('Already Present');
                    }
                })
            }
            },
        
        //     updateRoleAdminRoleJoint(obj){
        // return function(info,cb){
        //     RoleAdminSchema.findOneAndUpdate({_id:obj._id},{$set:obj},(err,doc)=>{
        //         if(err){
        //             cb('DB Error');
        //         }else if(doc==null)
        //         {
        //             cb('No Doc Found');
        
        //         }else{
        //             cb(null,{isupdated:true})
        //         }
        //     })
        // }
        //     },
        
            deleteRightAdminJoint(obj){
                return function(info,cb){
                    RoleAdminSchema.findOneAndDelete({id:obj.id},(err,doc)=>{
                        if(err){
        cb('DB Error');
                        }else {
         cb(null,{isDeleted:true});
                        }
                    })
                }
            },

            deleteAllAdminRoleMapofThisRole(obj){
                return function(info,cb){
                    RoleAdminSchema.remove({roleId:obj.roleId},(err)=>{
                        if(err){
                cb('DB Error');
                        }else {
                 cb(null,info);
                        }
                    })
                }
            },
            
        
      
        
}

module.exports=RoleAdminMap;