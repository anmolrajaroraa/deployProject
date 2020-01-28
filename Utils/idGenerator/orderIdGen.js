const shortId =require('randomatic');

const orderIdGen ={
    generateId(id) {
        if(id!=null && typeof(id)=='string') {
            let str;
            let randomString=shortId('aA0',5);
            str="JMN" + randomString + id;
            return str;
        }
        else {
            return null;
        }
    }
}
module.exports=orderIdGen;