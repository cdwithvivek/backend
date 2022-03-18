console.log('Express Tutorial')
/*

//header
const http = require('http')
const {readFileSync} = require('fs')
//get all files
const homePage = readFileSync('./index.html')


const PORT = 5000
const server = http.createServer( (req,res) =>{
    const url = req.url
    //home page 
    if(url ==='/'){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write(homePage)
    } // about page
    else if(url ==='/about'){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write('<h1> Welcome to about page </h1>')
    } // not found resource
    else{
        res.writeHead(404,{'content-type' : 'text/html'})
        res.write('<h1> 404 page not found </h1>')
    }
    console.log(req.method)
    console.log(req.url)
    res.end()
    console.log("user hit the server")
});

*/

// meaning full app 
const PORT = 5000
const http = require('http')
const {readFileSync}= require('fs')
// getting paths
const navbar = readFileSync('./navbar-app/index.html')
const navbarStyles = readFileSync('./navbar-app/styles.css')
const navbarImage = readFileSync('./navbar-app/logo.svg')
const navbarLogic = readFileSync('./navbar-app/browser-app.js')
const server = http.createServer( (req,res) =>{
    const url = req.url
    console.log(url)
    if(url === '/'){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write(navbar)
        
    }
    if(url === '/styles.css'){
        res.writeHead(200,{'content-type' : 'text/css'})
        res.write(navbarStyles)
    }
    if(url === '/logo.svg'){
        res.writeHead(200,{'content-type' : 'image/svg+xml'})
        res.write(navbarImage)
    }
    if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type' : 'text/javascript'})
        res.write(navbarLogic)
    }
    res.end()
})

server.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

