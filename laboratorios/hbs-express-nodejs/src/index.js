const express = require('express');
const cors = require('cors')
const path = require('path')

const alumnos = require('./data/alumnos.json')

const app = express();

// settings
app.set('port', process.env.port || 3000)

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use('/', (req, res) => {
  res.render('index', { titulo: 'plantilla hbs', datos: alumnos })
})

// server
app.listen(app.get('port'), () => {
  console.log('\x1b[31m%s\x1b[0m', `[server] ${new Date()} : server on port ${app.get('port')}`);
})