const express = require('express');          // express: use to create BE server 
//const path = require('path');               // path: use to work with file and directory paths (example: public folder)
const bodyParser = require('body-parser');  // body-parser: parse incoming request bodies in a middleware before your handlers, available under the req.body property
const knex = require('knex');               // knex: allow accessing database, query builder


const db = knex({
  client: 'mysql',
  connection:{
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'crm'
  }
})

const app = express(); // create an instance of express

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());               // parse incoming request (from Front end) in JSON format
// user - pass - role 
/*
let intialPath = path.join(__dirname, "../", "public");  // path connect - Public is root folder
// __dirname = D:\CRM-Project---Software-Engineer/server

app.use(express.static(intialPath));      // as HTML contain in public folder -> need to make that folder as static path

app.get('/', (req, res) => {
  res.sendFile(path.join(intialPath, "Login/login.html")); 
})
*/

app.post('/', (req, res) => {
  const {
    username, password, role
  } = req.body;
  
  db.select ('_username', '_password', '_role')
  .from ('dataLogin')
  .where({
      _username: username,
      _password: password,
      _role: role 
  })  

  .then(data => {
    if (data.length){
      return res.json(data[0]);
    } 
    else {
      return res.status(401).json({ message: 'Invalid username, password, or role' });

      //res.json('username, password or role is incorrect');
    }
  })
})

app.listen(8989, (req, res) => {
  console.log('listening on port 8989')
})


