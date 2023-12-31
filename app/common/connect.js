var mysql = require('mysql');

var connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo_book'
});

connection.connect(function(err, connection){

    if (err) console.log("kết nối thành công")
});

module.exports = connection;