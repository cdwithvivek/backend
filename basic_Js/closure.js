/*

function x(){
    var a = 10;
    function y(){
        var b = 20;
        console.log(a,b);
    }
    a=100;
    return y;
    // or
//  return function y(){
//
//  }
}
let z = x();
z();

//gotcha's of closure

*/

function z(){
    var b = 900;
    function x(){
        var a = 10;
        function y(){
            var b = 20;
            console.log(a,b);
        }
        a=100;
        y();
    }
    x();
    
}

z();
