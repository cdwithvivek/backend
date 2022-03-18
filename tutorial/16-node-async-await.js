const {readFile,writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () =>{
    try{
        const first = await readFilePromise('./content/first.txt','utf-8')
        const second = await readFilePromise('./content/subfolder/test.txt','utf-8')
        await writeFilePromise('./content/result-async.txt',`This is awesome: ${first}, ${second}`,{flag:'a'})
        console.log(first,second)
    }catch(error){
        console.log(error)
    }
    console.log('fuck async')
}
start()


