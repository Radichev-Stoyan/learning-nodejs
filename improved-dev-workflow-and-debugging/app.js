// const http = require('http');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
app.set('views', 'improved-dev-workflow-and-debugging/views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false })); // Parsing request body
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000); // Shortcut replacement for lines 19 and 21 and this makes line 1 unnecessary

// const server = http.createServer(app);

// server.listen(3000);
