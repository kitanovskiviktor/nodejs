const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'testbase',
    password: 'root',
    port: 3307,
});


db.connect((err) => {
  err ? console.log("Error", err) :  console.log("Connected");
})

module.exports = db;
