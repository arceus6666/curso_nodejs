const express = require('express')
const app = express()

app.get('/', (req,res)=>{
  res.send('<a href="/2">hola mundo</a>')
})
app.get('/2', (req,res)=>{
  res.send('<a href="/">hola mundo2</a>')
})

app.listen(3000,()=>{
  console.log('listening on port 3000')
})