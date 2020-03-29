const http = require('http');
var dateTime = require('./modules/firstModule');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer(
    (req, res) => {  
        res.statusCode = 200  
        res.setHeader('Content-Type', 'text/plain');
        res.write("The date and time are currently: " + dateTime.myDateTime()); 
        res.end();
    }
).listen(
    port, 
    hostname, 
    () => {  
        console.log(`Server running at http://${hostname}:${port}/`);
    }
);

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
//   }).listen(8080);