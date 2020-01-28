
const shortId=require('shortid');
shortId.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_');
const cartPIdGen ={
    generateId(id) {
        if(id!=null && typeof(id)=='string') {
            let str;
            let randomString=shortId.generate();
            str="JMN" + randomString + id;
            return str;
        }
        else {
            return null;
        }
    }
}
module.exports=cartPIdGen;