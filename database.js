const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});
connection.connect(err => {
    if (err) throw err;
    console.log('Connected!');
    // Your query here
  });
  connection.query('SELECT * FROM your_table', (err, results) => {
    if (err) throw err;
    console.log(results);
  });
  