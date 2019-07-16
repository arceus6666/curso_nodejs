const express = require('express');
const path = require('path');

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/api-cognos/alumnos', require('./routes/alumnos-route.js'));

// Start the server
app.listen(app.get('port'), () => {
  console.log('\x1b[31m%s\x1b[0m', `[server] listening on port ${app.get('port')}`)
});