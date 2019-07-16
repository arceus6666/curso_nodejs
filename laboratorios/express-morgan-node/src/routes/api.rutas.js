const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensaje: 'api-cognos' })
})

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json({ id, mensaje: 'api-cognos' })
})

router.post('/', (req, res) => {
  console.log(req.body)
  //const { nombres, apellidos } = req.body
  res.json({ mensaje: 'daniel', datos: req.body });
})

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombres, apellidos } = req.body
  res.json({ mensaje: 'api-cognos', datos: { id, nombres, apellidos } })
})

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  res.json({ mensaje: 'api-cognos', datos: { id } })
})

module.exports = router;