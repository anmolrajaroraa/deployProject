class Address{
   constructor() {
        this.fulladdress=null;  
        this.city=null;
        this.street=null;  
        this.state=null;  
        this.pin_code=null;
    }
}

class Documents{
    constructor(){ 
            this.GSTNumber=null;
            this.nomineeAdhno=null;
            this.adhno=null;  
            this.bankacno=null;  
            this.pancardno=null; 
        
    }
}

class Imageobj{
    constructor(){
            this.url=null;
            this.key=null;
    
    }
}

class ImageUrls{
   constructor(){
        this.policeVerification=null
        this.gST=null;
        this.panCardPhoto=null;
        this.nomineePhoto=null;
        this.cancelCheque=null;
        this.addressProof=null;
    }
}

class Plan{
    constructor(){
this.title=null;
this.total=null;
this.charges=null;
    }
}

class Empobject{
    constructor(){
    this.id=null;
    this.name=null;
    this.password=null;
    this.address=null,
    this.email=null;  
    this.mobile_no=null;  
    this.qualification=null;
    this.gender=null;
    this.hasLoggedOnce=false;
    this.referralCode=null;  
    this.selfReferralCode=null;
    this.isVerified=false;
    this.isRejected=false;
    this.date_of_birth=null;  
    this.nominee=null;
    this.nomineeRel=null;
    this.typeEmployee=null; 
    this.documents=null;
    this.ImageUrls=null;
    this.plan=null;
}

}

module.exports={
Empobject:Empobject,
ImageUrls:ImageUrls,
Address:Address,
Imageobj:Imageobj,
Documents:Documents,
Plan:Plan
};