const express = require('express');
const app = express();
const PORT = 5000;

app.set('view engine', 'ejs');

// Simulate login status
let isLoggedIn = false;

// Route to show home page
app.get('/', (req, res) => {
  res.render('home1', { isLoggedIn });
});

// Route to simulate login
app.get('/login', (req, res) => {
  isLoggedIn = true;
  res.redirect('/');
});

// Route to simulate logout
app.post('/logout', (req, res) => {
  isLoggedIn = false;
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
//Write an EJS template that conditionally displays a "Login" or "Logout" button based on a isLoggedIn variable passed from the server.