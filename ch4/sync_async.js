let fs = require('fs');
let data = fs.readFile('data.txt',{encoding:'utf8'});
console.log(data);