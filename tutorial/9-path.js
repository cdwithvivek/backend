const path = require('path');
console.log(path.sep)
// see normalize path
const filePath = path.join('/content//','subfolder','test.txt');
console.log(filePath);
// see file name
const base = path.basename(filePath)
console.log(base)
// see absoulte path
const abs = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(abs)