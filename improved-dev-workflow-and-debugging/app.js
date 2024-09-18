// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Parsing request body

app.use('/add-product', (req, res, next) => { // If the path doesn't match, the callback won't be executed and it will continue to the next middleware
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); // Sends a response to the client so no need to call next()
});

app.post('/product', (req, res, next) => { // Only executes if there is a POST request, respectfully app.get will execute only fo GET requests
  console.log(req.body);
  res.redirect('/');
});


app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>'); // Sends a response to the client so no need to call next()
});

app.listen(3000); // Shortcut replacement for lines 19 and 21 and this makes line 1 unnecessary

// const server = http.createServer(app);

// server.listen(3000);
