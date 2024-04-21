// db.js
import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'crm'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// query database
connection.execute(
  'SELECT * FROM `datakhachhang`',
  (err, rows) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log(rows);
  }
);

export default connection;
