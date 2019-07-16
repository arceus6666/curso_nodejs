const express = require('express');
const app = express();

// midlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//rutas
app.get('/', (req, res) => {
  res.send(`
  hola mundo<br/>
  <a href="/inicio">inicio</a><br/>
  <a href="/acercade">Acerca de</a><br/>
  <a href="/api-cognos">api</a><br/>
  <input type="text" id="in" value="123"/><a href='' onclick="this.href='/api-cognos/'+document.getElementById('in').value">id</a><br/>
  `)
})

app.use('/', require('./routes/pagina.ruta'))

app.use('/api-cognos', require('./routes/api.rutas'))

//server

app.listen(3000, () => {
  console.log('listening on port 3000')
})