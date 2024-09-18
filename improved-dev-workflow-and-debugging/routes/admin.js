const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => { // If the path doesn't match, the callback won't be executed and it will continue to the next middleware
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); // Sends a response to the client so no need to call next()
});

router.post('/product', (req, res, next) => { // Only executes if there is a POST request, respectfully app.get will execute only fo GET requests
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;