fetch("https://jsonplaceholder.typicode.com/albums").then(function cbf(){
    console.log("CB netflix")
})

setTimeout( ()=>{
    console.log("hello")
},2000);