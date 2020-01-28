const ejs=require('ejs');
const verifypath=__dirname+"/views/verifyTemplate.ejs";
const unverifypath=__dirname+"/views/unverifyTemplate.ejs";
const rejectpath=__dirname+"/views/rejectTemplate.ejs";
const emailpath=__dirname+"/views/emailVerification.ejs";
function userTemplate(userdata,res) {
  //  console.log(path);
    var pr =new Promise((resolve,reject)=> {

        if(userdata.action=='v'){
            ejs.renderFile(verifypath,{name:userdata.name},function(err,str) {
                if(err) {
                    console.log("error while reading the template ",err);
                    reject(err);
                }
                else{
                    resolve(str);
                }
            });
        }else if(userdata.action=='uv'){
            ejs.renderFile(unverifypath,{name:userdata.name,data:userdata.data.reason},function(err,str) {
                if(err) {
                    console.log("error while reading the template ",err);
                    reject(err);
                }
                else{
                    resolve(str);
                }
            });
        }else if(userdata.action=='rj'){
        ejs.renderFile(rejectpath,{name:userdata.name,data:userdata.data.reason},function(err,str) {
            if(err) {
                console.log("error while reading the template ",err);
                reject(err);
            }
            else{
                resolve(str);
            }
        });}else if(userdata.action=='em'){
            let url=userdata.link+"?verifyId="+res.verifyId;
            console.log(url);
ejs.renderFile(emailpath,{link:url},(err,str)=>{
    if(err) {
        console.log("error while reading the template ",err);
        reject(err);
    }
    else{
        resolve(str);
    }
})
        }else{
            reject('Illegal Param');
        }
    });
    return pr;
}
module.exports=userTemplate;  