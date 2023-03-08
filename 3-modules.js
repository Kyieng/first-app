// Modules- encapsulated code- we share only what we want
// commonjs, every file is module by default

// when constant is defined theres no need to put name in string format. 
// use string format when i haven't defined the variable or constant.

const names = require('./4-names');
const sayHi = require('./5-2ndmodules');
const data = require('./6-alternativeflavor');
require('./7-modules');

console.log(data);
// after you call a module you have to create a console.log request.
console.log(names);
sayHi('Susan');
sayHi(names.john);
sayHi(names.pete);
sayHi('Peter');

// (./) shows path of the module.