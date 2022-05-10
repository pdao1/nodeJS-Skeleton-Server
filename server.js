const http = require('http');
const fs = require('fs');
const _ = require('lodash');


    // request and response
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');


  // routing
  let path = './views/';

  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/contact':
      path += 'contact-me.html';
      res.statusCode = 200;
      break;
    case '/contact-me':
      res.statusCode = 301;
      res.setHeader('Location', '/contact'); // redirects
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // pushing index
  fs.readFile(path, (err, data) => {
  if (err) {
    console.log(err);
    res.end();
  } else {
    res.end(data);
  }
  })
});

  // server listen statement
  server.listen(3000, 'localhost', () => {
  console.log('listen for requests on port 3000');

});