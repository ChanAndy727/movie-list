var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'moviesDB'
});
connection.connect();
//connection.connect();
module.exports = connection;