const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials/');

// serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Alejandro Jimenez',
    title: 'Node server',
  });
});
app.get('/generic', (req, res) => {
  res.render('generic');
});
app.get('/elements', (req, res) => {
  res.render('elements');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port);

console.log('Now listening on port: ', port);
