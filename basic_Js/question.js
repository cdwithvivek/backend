/*
function x(){
    var i =1;
    setTimeout( function (){
        console.log(i);
    },1000);
    console.log("hello world");
}
x();
*/

// 1 after 1 sec 2 after 2 sec 3 after 3 sec
/*
for(let i=1; i<=5;i++){
    setTimeout( function(){
        console.log(i);
    },i*1000);
}
*/
// i has changed after for executed
/*
for(var i=1; i<=5;i++){
    setTimeout( function(){
        console.log(i);
    },i*1000);
}
*/
// solution

for(var i=1; i<=5; i++){
    function close(i){
        setTimeout(()=>{
            console.log(i);
        })
    }
    close(i);
}