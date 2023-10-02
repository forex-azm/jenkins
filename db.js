const mysql = require('mysql2');

// Create a database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'my-secret-pw',
  database: 'mydb'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db; // Export the database connection for use in other parts of your application
