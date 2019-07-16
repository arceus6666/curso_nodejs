const express = require('express')
const router = express.Router()
const fs = require('fs')


var alumnos = JSON.parse(fs.readFileSync('./data/alumnos.json', 'utf-8'))
//console.log(alumnos)

router.get('/', (req, res) => {
  res.json({ msg: 'alumnos', alumnos })
})

router.get('/:ci', (req, res) => {
  const ci = parseInt(req.params.ci)
  let alumno = alumnos.find(alumno => alumno.ci === ci)
  res.json(alumno ? { msg: 'encontrado', alumno } : { msg: 'no encontrado' })
})

router.post('/', (req, res) => {
  if (alumnos.find(alumno => { alumno.ci === req.body.ci }))
    return res.json({ msg: 'ya existe' })
  const { ci, nombre, apellido, curso } = req.body
  alumnos.push({ ci, nombre, apellido, curso })
  fs.writeFileSync('./data/alumnos.json', JSON.stringify(alumnos, null, 2))
  res.json({ msg: 'hecho', alumno: { ci, nombre, apellido, curso } })
})

router.put('/:ci', (req, res) => {
  const cii = parseInt(req.params.ci)
  const index = alumnos.findIndex(alumno => alumno.ci === cii)
  if (index === -1)
    return res.json({ msg: 'no encontrado' })
  const { ci, nombre, apellido, curso } = req.body
  alumnos[index] = { ci, nombre, apellido, curso }
  fs.writeFileSync('./data/alumnos.json', JSON.stringify(alumnos, null, 2))
  res.json({ msg: 'hecho', alumno: { ci, nombre, apellido, curso } })
})

router.delete('/:ci', (req, res) => {
  const cii = parseInt(req.params.ci)
  const index = alumnos.findIndex(alumno => alumno.ci === cii)
  if (index === -1)
    return res.json({ msg: 'no encontrado' })

  alumnos.splice(index, 1)
  fs.writeFileSync('./data/alumnos.json', JSON.stringify(alumnos, null, 2))
  res.json({ msg: 'hecho' })
})

module.exports = router;