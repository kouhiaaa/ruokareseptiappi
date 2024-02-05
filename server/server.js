// server.js

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ruutti',
  database: 'ruokareseptitietokanta',
});

db.connect();

// Define an API endpoint to fetch data from the database
app.get('/api/reseptit', (req, res) => {
  // Assuming you have a 'recipes' table in your database
  db.query('SELECT * FROM reseptit', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Luo yksinkertainen reitti, joka hakee tietokannasta. TESTI!!
app.get('/test', (req, res) => {
  db.query('SELECT * FROM ainesosat', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Close the database connection when the server is interrupted
process.on('SIGINT', () => {
  db.end();
  process.exit();
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
