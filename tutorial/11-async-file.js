const {readFile,write, writeFile, writeFileSync} = require('fs');

// callback use
readFile('./content/first.txt', 'utf8' ,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }else{
        const first = result;
        readFile('./content/subfolder/test.txt', 'utf8', (err,result) =>{
            if(err){
                console.log(err);
            }else{
                const second = result;
                console.log(first,second);
                writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err,result)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    console.log(result);
                });
            }
        });
    }
});

