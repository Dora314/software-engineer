const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'your_database'
});
connection.connect(err => {
    if (err) throw err;
    console.log('Connected!');
    // Your query here
});
connection.query('SELECT * FROM Persons', (err, results) => {
    if (err) throw err;
    console.log(results);
});