// Handle two routes '/' and '/users'
// Return some greeting text on '/'
// Return a list of dummy users (e.g. <ul><li>User 1</li></ul>) on '/users'
// Add a form with a "username" <input> to the '/' page and submit a POST request to '/create-user' upon a button click
// Add the '/create-user' route and parse the incoming data (i.e. the username) and simply log it to the console

const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Hello</title></head>');
    res.write(
      '<body>' +
      '<h1>Welcome!</h1>' +
      '<form action="/create-user" method="POST">' +
      '<input type="text" name="username" placeholder="Enter username">' +
      '<button type="submit">Submit</button>' +
      '</form>' +
      '</body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write(
      '<body>' +
      '<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>' +
      '</body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log('Username:', username);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
};

module.exports = requestHandler;