let http = require('http')
let fs = require('fs')

let server = http.createServer((req,res)=>{
    // size 1.7mb using file system
    // const text = fs.readFileSync('./content/big.txt','utf8')
    // res.end(text)

    const fileStream = fs.createReadStream('./content/big.txt','utf-8');
    fileStream.on( 'open', ()=>{
        fileStream.pipe(res)
    })
    fileStream.on( 'error', ()=>{
        res.end(err)
    })
})

server.listen(5000)