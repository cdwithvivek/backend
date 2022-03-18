const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit
// first listen with on then emit it .
customEmitter.on('response', (name,id)=>{
    console.log(`data received ${name}, ${id}`)
})

customEmitter.on('response', ()=>{
    console.log(`data received again `)
})
// emit the response
customEmitter.emit('response', 'john',34)


// extends events 
const http = require('http')
const server = http.createServer()
server.on('request',(req, res)=>{
    console.log("hello")
    res.end('Welcomes')
})

server.listen(5000)