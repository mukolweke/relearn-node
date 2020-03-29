import { createServer } from 'http';
import { myDateTime } from './modules/firstModule';

const hostname = '127.0.0.1';

const port = 3000;

//create a server object:
const server = createServer(
    (req, res) => {  
        res.statusCode = 200  
        res.setHeader('Content-Type', 'text/html');
        //write a response to the client
        res.write("The date and time are currently: " + myDateTime()); 
        //end the response
        res.end();
    }
)


//the server object listens on port 8080
server.listen(
    port, 
    hostname, 
    () => {  
        console.log(`Server running at http://${hostname}:${port}/`);
    }
);