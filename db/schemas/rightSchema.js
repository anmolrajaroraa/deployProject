const mongoose= require('../connection');

const Schema = mongoose.Schema;

const RightSchema= new Schema({
    rightId:String,
     rightName:String,
     rightUri:String,
     active:{
         type:Boolean,
         default:false
     }
})

module.exports= mongoose.model('rights',RightSchema);