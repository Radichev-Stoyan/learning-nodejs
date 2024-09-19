const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../utils/path');

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => { // If the path doesn't match, the callback won't be executed and it will continue to the next middleware
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => { // Only executes if there is a POST request, respectfully app.get will execute only fo GET requests
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;