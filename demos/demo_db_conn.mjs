import mysql from 'mysql';

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
  });
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});