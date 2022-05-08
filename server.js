const http = require('http');
const fs = require('fs');

    // request and response
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // pushing index
  fs.readFile('./views/index.html', (err, data) => {
  if (err) {
    console.log(err);
    res.end();
  } else {
    res.end(data);
  }
});

  server.listen(3000, 'localhost', () => {
  console.log('listen for requests on port 3000');
})});