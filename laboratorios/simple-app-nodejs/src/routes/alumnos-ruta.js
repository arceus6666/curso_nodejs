const express = require('express')
const router = express.Router()

var alumnos = require('../controllers/alumnos')

router.get('/', (req, res) => {
  res.json(alumnos.getAll())
})

router.get('/:ci', (req, res) => {
  const ci = parseInt(req.params.ci)
  res.json(alumnos.getOne(ci))
})

router.post('/', (req, res) => {
  const { ci, nombre, apellido, curso } = req.body
  res.json(alumnos.add({ ci, nombre, apellido, curso }))
})

router.put('/:ci', (req, res) => {
  const cii = parseInt(req.params.ci)
  const { ci, nombre, apellido, curso } = req.body
  res.json(alumnos.modify(cii, { ci, nombre, apellido, curso }))
})

router.delete('/:ci', (req, res) => {
  const ci = parseInt(req.params.ci)
  res.json(alumnos.remove(ci))
})

module.exports = router;