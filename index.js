const express = require('express');
const app = express();

const port = 3300;

// serve static content
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile('Hello World');
});

app.listen(port);

console.log('Now listening on port: ', port);
