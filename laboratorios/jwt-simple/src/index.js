const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const ensureToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  console.log(bearerHeader)
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.get('/api-cognos', (req, res) => {
  res.json({
    text: 'api-cognos works!'
  });
});

app.post('/api-cognos/login', (req, res) => {
  // auth user
  const user = { id: 3 };
  const token = jwt.sign({ user }, 'key');
  res.json({ token });
});

app.get('/api-cognos/protected', ensureToken, (req, res) => {
  jwt.verify(req.token, 'key', (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        text: 'protected Response!',
        data
      });
    }
  });
});

app.listen(3000, () => {
  console.log('\x1b[31m%s\x1b[0m', '[server] Listening on port 3000');
});
