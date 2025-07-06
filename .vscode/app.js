const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Route to render the HTML from views/home.ejs
app.get('/', (req, res) => {
  const user = { name: 'Sameer', role: 'Developer' };
  res.render('home', { user });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
