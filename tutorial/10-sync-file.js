const {readFileSync,writeFileSync, read} = require('fs');
//reading file
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/subfolder/test.txt','utf8');
console.log(first,second);
// writing file
// overwrite if exsit or create to append use {flag:'a'}
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second} \n`, {flag:'a'});
console.log('done with this task');
console.log('starting the next one');