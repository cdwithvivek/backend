//AJAX
/*
setTimeout( function (){
    console.log("timer");
},3000);

function x(y){
    console.log("x");
    y();
}
var a = function y(){
    console.log("y");
}
x(a);
*/
function addEventListeners(){
    var btn = document.getElementById('clickme');
    let count = 0;
    btn.addEventListener("click", function (){
        console.log('button clicked ', ++count)
    })
}
addEventListeners();
