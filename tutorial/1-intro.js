/*
    Global variable

    __dirname - path to curr dir
    __filename - path name
    require - function to use modules (commonJs) 
    module -    info about current module (file)
    process -   info about enviroment where the program is being executed

*/

console.log(__dirname);
console.log(__filename);

setInterval(()=>{
    console.log("hello world");
},1000);
