var mysql = require('mysql');

var connection = mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        password: "root",
        database: "basic_lms",
    }
);

module.exports = connection;