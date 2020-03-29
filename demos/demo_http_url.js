import { createServer } from 'http';

// e.g http://localhost:8080/dashboard

createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.write(req.url);

    res.end();
}).listen(8080);

