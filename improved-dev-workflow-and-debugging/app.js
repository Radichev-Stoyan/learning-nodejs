// const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

app.use('/add-product', (req, res, next) => { // If the path doesn't match, the callback won't be executed and it will continue to the next middleware
  console.log('In another middleware!');
  res.send('<h1>"Add product page"</h1>'); // Sends a response to the client so no need to call next()
});

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>'); // Sends a response to the client so no need to call next()
});

app.listen(3000); // Shortcut replacement for lines 19 and 21 and this makes line 1 unnecessary

// const server = http.createServer(app);

// server.listen(3000);
