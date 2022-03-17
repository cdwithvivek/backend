const http = require('http');
const server = http.createServer( (req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('This is our about page');
    }
    else{
        res.end(`<h1>Opps!!!</h>
        <a href='/'> click here </a>`);
    }
});
// listen after 5 sec
server.listen(5000);