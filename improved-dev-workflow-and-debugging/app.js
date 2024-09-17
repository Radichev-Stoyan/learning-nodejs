const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware!');
  next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>'); // Sends a response to the client so no need to call next()
});

const server = http.createServer(app);

server.listen(3000);
