// two phase 
//1st variable enviroment x=undefined  a = {whole code} b = {whole code}
//2nd line by line execution x=1
// same with a(), b() new execution stack (with call stack) // find x in local call stack so print 10 and 100
// if x not available in local execution stack it will look outside call stack 1 level down


var x = 1;
a();
b();
 
function a(){
    var x = 10;
    console.log(x);
}
function b(){
    var x = 100;
    console.log(x);
}

console.log(x)
console.log(globalThis)
