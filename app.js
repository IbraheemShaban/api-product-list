const express = require('express');
const data = require('./data');
const port = 8000;
const app = express();

app.get('/api/products', (req, res) => {
  res.json(data);
});

app.listen(port);
