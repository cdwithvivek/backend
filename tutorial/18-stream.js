const {createReadStream} = require('fs')
// default 64kb
const stream = createReadStream('./content/big.txt',{highWaterMark : 90000, encoding: 'utf8'})

stream.on('data',(result) =>{
    console.log(result)
    console.log(result.length)
},)

stream.on('error', (error)=>{
    console.log(error)
})