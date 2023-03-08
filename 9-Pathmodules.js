//built in modules are OS,PATH,FS,HTTP

const path = require('path')

//path separator- returns a platform specific separator
console.log(path.sep);

//path joiner
const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath);

//to access a file
const base = path.basename(filePath)
console.log(base)

//to return absolute path
const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute);