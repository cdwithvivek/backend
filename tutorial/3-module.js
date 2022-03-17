//Modules
// module - encapsulated code (only share minimum)
// every file in node in module
const names = require('./4-name');
const fun = require('./5-util');
const data = require('./6-alt-module');
// reuqire will run the add fucntion also we called in mind-grenade
// require('./7-mind-grenade');

// console.log(names)
// console.log(fun)
// console.log(data)
fun.sayHi('amit kumar');
fun.sayHi(names.vivek);
fun.sayHi(names.vishal);

