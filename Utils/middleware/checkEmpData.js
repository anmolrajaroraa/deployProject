const config=require('../statusconfig');
const refCodeGen=require('../referralGen/referralCode');
const passwordEncryptor=require('../passwordEncryptor');
const Emp=require("../../models/setterGetter/empSetGet");
function isObject(val) {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
}
function checkEmpData(req,res,next) {
  let isNull=false;
  try{
    let object = new Emp.Empobject();
    for(let key in req.body){
      if(key!='uid' && key!='password' && key!='referralCode' && key!='selfReferralCode' && key!='plan'
       && isObject(req.body[key])==false){
           if(req.body[key]!=null){
            object[key]=req.body[key];
           }  else{
        isNull=true;
      }
    }
    }
     if(isNull==true){
         res.status(409).json('Null Form');
     }else{
let plan= new Emp.Plan();
plan.title=req.body.plan.title;
plan.charges= req.body.plan.charges;
plan.total=req.body.plan.total;
object.plan=plan;
    object.id=req.body.uid;
    object.password=passwordEncryptor.generatePassHash(req.body.password,10)
    let addressobj= new Emp.Address();
    for(let key in addressobj){
        if(req.body.address!=null){     
          addressobj[key]=req.body.address[key];
                    
        }
    }
    object.address=addressobj;
  
    object.selfReferralCode=refCodeGen.idgenerator(req.body.mobile_no);
    
let documentsobj= new Emp.Documents();
            for(let keyreq in documentsobj){
                    if(req.body.documents[keyreq]!='' && req.body.documents[keyreq]!=null){
                        documentsobj[keyreq]=req.body.documents[keyreq];
                    }else{
                       documentsobj[keyreq]=null;
                    }
                
            }

  object.documents=documentsobj;

  let imageObjArray = new Emp.ImageUrls();
    for(let key in imageObjArray){
            if(req.body.filesobjurl!=null){ 
               req.body.filesobjurl.forEach(obj=>{
                     
                         if(obj[key]!=null){
                            let urlkeyobj= new Emp.Imageobj();
                            urlkeyobj.url=obj[key].url;
                           urlkeyobj.key=obj[key].key;
                           imageObjArray[key]=urlkeyobj;
                         //   console.log(object.ImageUrls);
                        }
                        
                   });
                }
 }

  object.ImageUrls=imageObjArray;
  req.empobj=object;
  next();
     }
  }catch(e){
    res.status(409).json('Null Form');
  }
}
module.exports=checkEmpData;