const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// initializations
const app = express();
mongoose.connect('mongodb://localhost/cognosdb', { useNewUrlParser: true});

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api-cognos/alumnos', require('./routes/alumnos.routes'));

// starting the server
app.listen(app.get('port'), () => {
  console.log('\x1b[31m%s\x1b[0m', `[server] Listening on port ${app.get('port')}`);
});