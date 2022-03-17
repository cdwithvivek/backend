// function statement
a();
function a(){
    console.log('a');
}
a();
// function expression
var b = function (){
    console.log('b');
}
b();
//function declaration aka function statement

// anonymous function
setTimeout(function (){ 
    console.log('hi')
}
,1000);

// named function expression

var f = function xyz(){
    console.log(xyz); //work fine
}
// xyz(); // error created as local variable
f();

// parameter and arguments
// parameter => local to function , label of function
// argument while calling pass agruments not parameters


//first class function
// function can be passed as agrugment and received as parameters
// return a function from a function

// first class citizens -> same first class function

// arrow function
