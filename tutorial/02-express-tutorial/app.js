const express = require('express')
const app = express()
const {people} = require('./data.js')
// static assests middle-ware
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended :false}))

app.get('/api/people', (req,res) =>{
    res.status(200).json({sucess: true , data : people})
})



// add data in server
// cannot perform post request -> we have to setup  working app or postman


app.post('/login', (req,res) =>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`welcome back ${name}`)
    }
    res.status(200).send('No name')
})
// using javascript

app.post('/api/people' , (req,res) =>{
    const {name} = req.body
    
    if(!name){
        return res.status(400).json({sucess : false, msg : 'please provide name value'})
    }
    res.status(200).json({sucess: true, person : name })
})
app.listen(5000,(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(`Server is listening to ... 5000`)
});
