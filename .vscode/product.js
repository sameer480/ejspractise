const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 7000;

app.set('view engine', 'ejs');
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Sample product list
let products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Tablet', price: 600 }
];

// Route: Display product table
app.get('/', (req, res) => {
  res.render('index', { products });
});

// Route: Delete product by ID
app.post('/delete/:id', (req, res) => {
  const idToDelete = parseInt(req.params.id);
  products = products.filter(p => p.id !== idToDelete);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

