const express = require('express');

// define express app & invoking it
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests at port 3000
app.listen(3000);

app.get('/', (req, res) => {
//  res.send('<h1>Hello</h1>');
  // res.sendFile('./views/index.html', {root: __dirname });
  res.render('index');
});
app.get('/about', (req, res) => {
 // res.send('<p>About</p>');
  // res.sendFile('./views/about.html', {root: __dirname });
  res.render('about')
});
app.get('/contact', (req, res) => {
  res.render('contact')
});

app.get('/blogs/create', (req, res) => {
  res.render('create')
});

// redirect code
// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// });


// always make 4040 page last in order because it runs through all get requests to check if page exists.  If placed too high it will prematurely show 404 even if page exists.
app.get('404', (req, res) => {
  res.render('404')
});