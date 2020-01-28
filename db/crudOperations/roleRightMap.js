const async= require('async');
const rightSchema = require('../schemas/rightSchema');
const RoleRightSchema = require('../schemas/roleRightJointSchema');
const RoleRightMap={

    getRoleRight(){
        return function(info,cb){
            console.log(info);
            RoleRightSchema.find({roleId:info.roleId},(err,doc)=>{
                if(err){
        cb('DB Error');
                }else if(doc.length==0) {
        return cb('No Role Right Found')
                }else{
                    console.log(doc);
               cb(null,doc);
                }
            })
        }
        }
        ,
            createRoleRightJoint(obj){
            return function(info,cb){
                RoleRightSchema.findOne({roleId:obj.roleId,rightId:obj.rightId},(err,doc)=>{
                    if(err){
        cb('DB Error');
                    }else if(doc==null){
                     let schema = new RoleRightSchema({
                         rightId:obj.rightId,
                         roleId:obj.roleId
                     })
        
                     schema.save(err=>{
                         if(err){
                       cb('DB Error');
                         }else{
        cb(null,{created:true});
                         }
                     })
                    }else{
                 cb('Already Present');
                    }
                })
            }
            },
        
        //     updateRoleRighttRoleJoint(obj){
        // return function(cb){
        //     RoleRightSchema.findOneAndUpdate({_id:obj._id},{$set:obj},(err,doc)=>{
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
        
            deleteRightRoleJoint(obj){
                return function(info,cb){
                    RoleRightSchema.findOneAndDelete({roleId:obj.roleId,rightId:obj.rightId},(err,doc)=>{
                        if(err){
        cb('DB Error');
                        }else if(doc==null){
                     cb('No Doc Found')
                        }else {
         cb(null,{isDeleted:true});
                        }
                    })
                }
            },

         deleteRoleRightJointsofRight(obj){  //remove all maps of this right if right is deleted
             return function(info,cb){
                 RoleRightSchema.remove({rightId:obj.rightId},(err)=>{
                     if(err){
                     cb('DB Error');
                     }else{
               cb(null,info);
                     }
                 })
             }
         }
            ,
            deleteRoleRightJointofRole(obj){
                return function(info,cb){
                    RoleRightSchema.remove({roleId:obj.roleId},(err)=>{
                        if(err){
                        cb('DB Error');
                        }else{
                  cb(null,info);
                        }
                    })
                }
            }
        ,
            getRightsofRole(obj){
        return function(cb){
          RoleRightSchema.find({roleId:obj.roleId},(err,doc)=>{
              if(err){
             cb('DB Error');
              }else {
                  cb(null,doc);
              }
          })
           
        }
            },
              getRightsDesc(){
        return function(info,cb){
        
        let arr=[];
            async.each(info,(right,innercb)=>{
                 rightSchema.findOne({'rightId':right.rightId,active:true},(err,doc)=>{
                     if(err){
                        return innercb('DB Error');
                     }else if(doc!=null){
                         
                         arr.push(doc)
                         innercb();
                     }
                 })
            },err=>{
                if(err){
                    cb(err);
                }else {
                   // console.log(arr);
                    cb(null,arr);
                }
            })
           
        }
            }
        
        
}

module.exports=RoleRightMap;