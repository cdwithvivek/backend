// npm i <package name>  local
// npm i -g <package name> global
const _ = require('lodash')
const items = [1, [2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems)
