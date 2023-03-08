// Globals

// __dirname - Path to current directory
// __filename- file name
// require   - funtion to use modules(commonJS)
// Module    - info about current module (file)
// process   - info about environment where the program is being executed.

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

setInterval(()=>{
    console.log('Hello Cee')
},1000);