const http = require('http');

    // request and response
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.writeHead('200');
  res.setHeader('Content-Type', 'text/html');

  res.write('<p>Sup hoe</p>');
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('listen for requests on port 3000');
});