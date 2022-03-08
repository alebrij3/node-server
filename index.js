const http = require('http');

const port = 3300;

http
  .createServer((req, res) => {
    res.write('Hola, mundo');
    res.end();
  })
  .listen(port);

console.log('Escuchando en el puerto: ', port);
