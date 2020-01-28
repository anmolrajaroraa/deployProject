const rightSchema= require('../schemas/rightSchema');
const idGen= require('../../Utils/idGenerator/idGen');
const rightCrud={

    getAllRights(obj){
        return function(info,cb){
           rightSchema.find({},(err,docs)=>{
               if(err){
return cb('DB Error');
               }else{
                   cb(null,docs)
               }
           })
        }
    },

   createRight(data){
       return function(info,cb){
   
        rightSchema.findOne({rightName:data.rightName},(err,doc)=>{
            if(err){
           cb('DB Error');
            }else if(doc==null){
                let schema = new rightSchema({
                    rightId:idGen.idgenerator('RT'),
                    rightName:data.rightName,
                     rightUri:data.rightUri,
                     active:data.active
                })
                
                schema.save(err=>{
                    if(err){
                      cb('DB Error')
                    }else{
                      cb(null,{isCreated:true})
                    }
                })
            }else{
          cb(null,{override:true,doc:doc});
            }
        })


       }
   },

   updateRight(data){
       return function(info,cb)
       {  
           rightSchema.findOneAndUpdate({_id:data._id},{$set:{
        rightName:data.rightName,
        rightUri:data.rightUri,
        active:data.active}},{new:true},(err,doc)=>{
        if(err){
       cb('DB Error');
        }else if(doc==null){
       cb('No Doc Found')

       }else{
           cb(null,{isUpdated:true});
       }})
    }
   },
   deleteRight(data){
       return function(info,cb){
           rightSchema.findOneAndDelete({_id:data._id},(err,doc)=>{
               if(err){
              cb('DB Error');
               }else if(doc==null){
                   cb('No Doc Found')
               }else{
                   cb(null,{isDeleted:true});
               }
           })
       }
   }

}

module.exports=rightCrud;