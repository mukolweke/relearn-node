let mysql = require('mysql');

mysql.createConnection({
    host: "localhost",
    user: "homestead",
    password: "secret"
}).connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});