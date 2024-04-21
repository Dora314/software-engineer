import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/data', (req, res) => {
    connection.query('SELECT * FROM datakhachhang', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  