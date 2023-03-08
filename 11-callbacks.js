
//callback - when funconality is done we run a call back function
const {readFile, writeFile} = require('fs');

console.log('start')
readFile('./content/firstFile.txt','utf8',(err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/first.txt',(err,result)=> {
        if(err){
            console.log(err)
            return  
    }
    const text = result
    writefile('./content/result-sync.txt',
    'here is the text:'+(first, text),
    (err,result) =>{
        if (err){
            console.log(err);
            return
        }
        console.log('done with this task')
    }
    )
})
})
console.log('Starting next task')