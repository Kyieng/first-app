//built in modules are OS,PATH,FS,HTTP
// 2 functions on file system reading and writing

const { readFileSync, writeFileSync } = require('fs');
console.log ('start')
// to read whats in a file..
const first = readFileSync('./content/first.txt','utf8');
const text = readFileSync('./content/subfolder/text.txt','utf8');

console.log(first, text);

// to write, create and read new file

writeFileSync('./content/result-sync.txt',
'here is the text:'+(first, text));

const readFile = require('./11-callbacks');

console.log('Done with this file')
console.log('starting the next task')