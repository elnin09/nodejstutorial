const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about')
    {
        res.end('Welcome to our about page')
    }
    res.end("Cant seem to find the page you requested for")
});

server.listen(5000);