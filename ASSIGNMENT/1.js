
function reverseString(stri){
   let arr = stri.split('');
   let rev= arr.reverse();
   let result = rev.join('');
   console.log(result);
   
}
let str="suraj is a bad boy";
setTimeout(()=>{
   let result=reverseString(str);
   return result;
},2000);

