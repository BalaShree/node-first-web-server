const express = require('express');
const hbs = require('hbs');

app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.send('Hello Expres!');
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    year: new Date().getFullYear()
  });
});

app.listen(3000);
