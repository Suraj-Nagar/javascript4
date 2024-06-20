let delay=5;
function random(){
    // let result=Math.floor(10*Math.random()*800);
    console.log("Wishing You a Happy Birthday URVASHII");
}
// let val=[1111,2222,3666,4485,5458,6155,7784,8254,9365,1000];
function message(secondsremaining){
    console.log(`Time ramaining ${secondsremaining} for urvashi birthday`);
}
function countdown(){
    let secondsremaining=delay;
    message(secondsremaining);
    const interval = setInterval(()=>{
        secondsremaining--;
        message(secondsremaining);
        if(secondsremaining<=0){
            clearInterval(interval)
            random();
        }
    },1000);
}
countdown();