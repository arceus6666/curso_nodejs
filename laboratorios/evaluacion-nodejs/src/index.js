const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// connection to db
mongoose.connect('mongodb://localhost/cognosdb')
  .then(db => console.log('\x1b[35m%s\x1b[0m', '[mongoose] db connected'))
  .catch(err => console.log('\x1b[31m%s\x1b[0m', `[mongoose] ${err}`));

// settings
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use

// routes
app.use('/evaluacion-cognos', require('./routes/index'));

//server
app.listen(app.get('port'), () => {
  console.log('\x1b[36m%s\x1b[0m', `[server] Listening on port ${app.get('port')}`);
});