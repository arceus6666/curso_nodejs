const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');
router.get('/', async (req, res) => {
  const alumnos = await Alumno.find();
  res.render('index', { alumnos });
});
router.post('/insertar', async (req, res, next) => {
  const { ci, nombres, apellidos } = req.body;
  const alumno = new Alumno({ ci, nombres, apellidos });
  await alumno.save();
  res.redirect('/');
});
router.get('/editar/:ci', async (req, res, next) => {
  const { ci } = req.params;
  const result = await Alumno.find({ ci });
  res.render('edit-form', { alumno: result[0] });
});
router.post('/editar/:ci', async (req, res, next) => {
  const { ci } = req.params;
  const { nombres, apellidos } = req.body;
  await Alumno.update({ ci }, { nombres, apellidos });
  res.redirect('/');
});
router.get('/eliminar/:ci', async (req, res, next) => {
  const { ci } = req.params;
  await Alumno.findOneAndDelete({ ci })
  res.redirect('/');
});
module.exports = router;