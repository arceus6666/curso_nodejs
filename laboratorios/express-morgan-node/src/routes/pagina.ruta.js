const express = require('express')
const router = express.Router()

router.get('/inicio', (req,res)=>{
  res.send('pagina de inicio<br/><a href="/">volver</a>')
})

router.get('/acercade', (req,res)=>{
  res.send('acerca de esta pagina<br/><a href="/">volver</a>')
})

module.exports = router;