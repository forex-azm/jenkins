const express = require('express');
const app = express();
const port = 3000;
const db = require('./db'); // Adjust the path as needed
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// Set up a route that renders the view
app.get('/', (req, res) => {
  res.render('index', { message: 'Express with Views' });
});

app.get('/about', (req, res) => {
  res.render('about', { message: 'Express with Views' });
});




// Example route that queries the database
app.get('/users', (req, res) => {
  db.query('SELECT * FROM admin', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
