const e = require("express");

let pattern=/[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/g

let weburl="https://www.linkedin.com/in/suraj-nagar-b6504322aA/"
function checkurl(weburl){
    let result=pattern.test(weburl);
    return result;
}
if((weburl.length)>5&&(weburl.length)>=30){
    console.log(`lenght of profile I'd should be in 5 to 30`);
}
const ishere=checkurl(weburl);
if(ishere){
    console.log(`Given URL ${weburl} has a Valid format`);
}else{
    console.log(`Given URL ${weburl} has a Invalid format`);
}