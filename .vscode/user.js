const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route: Show form
app.get('/', (req, res) => {
  res.render('form');
});

// Route: Handle form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.render('result', { name, email });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
//Build an Express.js app with an EJS template that renders a form to collect user details (name, email) and displays them on submission.