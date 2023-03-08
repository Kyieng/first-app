const http = require('http');


const server = http.createServer((req,res) =>{
if(req.url === '/'){
    res.end('Welcome to our Homepae')
}
if(req.url === '/about'){
    res.end('This is our History')
}
   res.end(
    'Oops!',
    "We Can't see to find the page you're looking for",
    '/Back to Homepage',)
})


server.listen(5000)
// this creates my first webpage search localhost:5000
// what we want is the url the client is requesting