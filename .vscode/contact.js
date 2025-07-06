const express = require('express');
const app = express();
const PORT = 8000;

// Set view engine
app.set('view engine', 'ejs');

// Middleware to render pages with layout manually
const renderWithLayout = (res, view, options = {}) => {
  const ejs = require('ejs');
  const fs = require('fs');
  const layout = fs.readFileSync(__dirname + '/views/layout.ejs', 'utf-8');
  const content = fs.readFileSync(__dirname + `/views/${view}.ejs`, 'utf-8');
  const body = ejs.render(content, options);
  res.send(ejs.render(layout, { ...options, body }));
};

// Routes
app.get('/', (req, res) => {
  renderWithLayout(res, 'home2', { title: 'Home', activePage: 'home' });
});

app.get('/about', (req, res) => {
  renderWithLayout(res, 'about', { title: 'About', activePage: 'about' });
});

app.get('/contact', (req, res) => {
  renderWithLayout(res, 'contact', { title: 'Contact', activePage: 'contact' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
