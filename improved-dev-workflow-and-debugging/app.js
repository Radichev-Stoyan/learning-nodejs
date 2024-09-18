// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false })); // Parsing request body

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000); // Shortcut replacement for lines 19 and 21 and this makes line 1 unnecessary

// const server = http.createServer(app);

// server.listen(3000);
