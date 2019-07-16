const express = require('express')
const cors = require('cors')
const path = require('path')

const log = require('./controllers/log')
const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(log)
app.use(cors())

app.use('/api-cognos/alumnos', require('./routes/alumnos-ruta'))
//app.use('/api-cognos/json', require('./routes/alumnos-json'))

app.use(express.static(path.join(__dirname, 'public')))

//server
app.listen(app.get('port'), () => {
  console.log('\x1b[31m%s\x1b[0m', `[server] ${new Date()} : server on port ${app.get('port')}`);
});