const timeSlotSchema = require('../schemas/timeSlotSchema');
const timeSlotCrud =  {

getTimeSlots(){
    return function(cb){
timeSlotSchema.TimeSlot.find({},(err,docs)=>{
    if(err){
       return cb('DB Error');
    }else if(docs.length==0){
  return   cb('No Time Slot Present');
    }else {
        cb(null,docs);
    }
})
    }
},

getAvailableSlots(){
    return function(cb){
        timeSlotSchema.TimeSlot.find({isAvail:true},(err,docs)=>{
            if(err){
               return cb('DB Error');
            }else if(docs.length==0){
          return   cb('No Time Slot Present');
            }else {
                cb(null,docs);
            }
        })
            }
        },

findTimeSlot(id){
return function(cb){
    timeSlotSchema.TimeSlot.findById(id,(err,doc)=>{
      if(err){
        return  cb('DB Error');
      }else if(doc==null){
         return cb('No Time Slot Crud Found');
      }else{
         return cb(null,doc);
      }
    })
}
},
getNearestTimeSlot(dateobj){
 //   console.log(dateobj)
    return function(cb){
timeSlotSchema.TimeSlot.findOne({
    ststarthour:{$lte:dateobj.hour},
    stendhour:{$gt:dateobj.hour},
    startampm:dateobj.ampm,
    isAvail:true
},(err,doc)=>{
    if(err){
        console.log(err);
       return cb('DB Error');
    }else if(doc==null){
  return  cb('No Time Slot Found');
    }else{
        cb(null,doc);
    }
})
    }
}
,
updateTimeSlot(updateobj){
return function(cb){
    timeSlotSchema.TimeSlot.findByIdAndUpdate(updateobj._id,{$set:{
        starthour:updateobj.starthour,
        endhour:updateobj.endhour,
        startmin:updateobj.startmin,
        endmin:updateobj.endmin,
        startampm:updateobj.startampm,
        endampm:updateobj.endampm,
        ststarthour:updateobj.ststarthour,
        stendhour:updateobj.stendhour,
        isAvail:updateobj.isAvail
    }},{new:true},(err,doc)=>{

        if(err){
          return  cb('DB Error');
        }else if(doc==null){
          return  cb(null,null);
        }else{
            cb(null,doc);
        }
    })
}
},

deleteTimeSlot(id){
return function(cb){
    timeSlotSchema.TimeSlot.findByIdAndDelete(id,(err,doc)=>{
        if(err){
          return  cb('DB Error');
        }else if(doc==null){
            return cb('No Id Found');
        }else {
            cb(null,doc);
        }
    })
}
},

addTimeSlot(obj){
    return function(cb){
      let timeslotobj=new timeSlotSchema.TimeSlot({
          startmin:obj.startmin,
          starthour:obj.starthour,
          endhour:obj.endhour,
          endmin:obj.endmin,
          startampm:obj.startampm,
          endampm:obj.endampm,
          ststarthour:obj.ststarthour,
          stendhour:obj.stendhour,
          isAvail:obj.isAvail
      })
      timeslotobj.save((err)=>{
          if(err){
            return cb('Db Error')
          }else{
              cb(null,true);
          }
      })
    }
}


}


module.exports= timeSlotCrud;