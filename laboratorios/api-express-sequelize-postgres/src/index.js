const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// initializations
const app = express();
// settings
app.set('port', process.env.PORT || 3000);
// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// routes
app.use('/api-cognos/alumnos', require('./routes/alumnos'));
app.use('/api-cognos/cursos', require('./routes/cursos'));
// starting the server
app.listen(app.get('port'), () => {
  console.log('\x1b[31m%s\x1b[0m', `[server] ${new Date()} : Server escuchando en el puerto ${app.get('port')}`);
});