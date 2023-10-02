const express = require('express');
const app = express();
const port = 3000;

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


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
