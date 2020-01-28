
const mongoose=require("../connection");

var Schema=mongoose.Schema;

const imageSchema = new Schema({
    url:String,
    key:String
})

const addressSchema = new Schema({
    fulladdress:{
        type: String
    },
    street:{
        type: String  
      },
    city:{
        type: String  
      },
    state:{
        type: String  
      },
    pin_code:{
        type: String  
      }
})

const documentSchema= new Schema({
    GSTNumber:{
        type:String
    },
    adhno:{
        type: String,
    },
    bankacno:{
        type: String    },
    pancardno:{
        type: String  
      }
      ,
    nomineeAdhno:{
        type:String
    }
})

const imageobjSchema = new Schema({
    
    policeVerification:imageSchema,
    panCardPhoto:imageSchema,
    addressProof:imageSchema,
    gST:imageSchema,
    nomineePhoto:imageSchema,
    cancelCheque:imageSchema
})

const plan=new Schema({
    title:String, 
    charges: String, 
    total:Number
})

const empSchema=new Schema({
    id:{
        type:String
    },
    name:{
        type: String
    },
    password:{
        type:String
    },
    address:addressSchema,

    gender:{
        type: String
    },
    selfReferralCode:{
        type:String
    },
    isVerified:{
        type:Boolean
    },
    isRejected:{
        type:Boolean
    }
    ,
    referralCode:{
        type: String
    },
    nominee:{
        type:String
    },
    nomineeRel:{
        type:String
    },   
    email:{
        type: String   
     },
    mobile_no:{
        type: String  
      },

    qualification:{
        type: String  
      },
    date_of_birth:{
        type: String  
      },
      hasLoggedOnce:Boolean,
    typeEmployee:{
        type: String 
       },
       plan:plan,
    documents:documentSchema,
    ImageUrls:imageobjSchema
    

});

module.exports=mongoose.model("employees",empSchema);