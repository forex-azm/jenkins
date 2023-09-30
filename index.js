const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Awesome cicd pipeline');
});


app.get('/about', (req, res) => {
  res.send('This is about page');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
