let http = require('http');
let url = require('url');

// e.g http://localhost:8080/?year=2019&month=April

http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    var q = url.parse(req.url, true).query;


    // console.log(q.host); //returns 'localhost:8080'
    // console.log(q.pathname); //returns '/'
    // console.log(q.search); //returns '?year=2019&month=April'

    // var qdata = q.query; //returns an object: { year: 2019, month: 'April' }
    // console.log(qdata.month); //returns 'April'
  
    var txt = q.year + " " + q.month;

    res.end(txt);
}).listen(8080);

