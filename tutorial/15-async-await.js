const {readFile} = require('fs')
// promise
const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8', (err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))

const start = async () =>{
    try{
        const first = await getText('./content/first.txt');
        const second = await getText('./content/subfolder/test.txt')
        console.log(first,second)
    }catch(error){
        console.log(error)
    }
    console.log('fuck async')
}
start()

