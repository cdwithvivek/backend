const authorize = (req,res,next) =>{
    const {user} = req.query;
    if(user === 'john'){
        //adding user to req object to access in all router awesome
        req.user = {name : 'john', id : 3}
        next()
    }
    else{
        res.status(401).send('unauthozied')
        
    }
    
}

module.exports = authorize