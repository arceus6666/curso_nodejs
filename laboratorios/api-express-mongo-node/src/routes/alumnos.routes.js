const express = require('express');
const router = express.Router();

const Alumnos = require('../models/Alumno');

router.get('/', async (req, res) => {
  const alumnos = await Alumnos.find({});
  res.json(alumnos);
});

router.get('/:ci', async (req, res) => {
  const ci = req.params.ci;
  await Alumnos.find({ ci }, (a, err) => {
    if (err) return res.json({ ok: false, msg: { err } });
    if (!a) return res.json({ ok: false, msg: 'No encontrado(a)' });
    delete a.__v;
    res.json({ ok: true, msg: { a } });
  });
});

router.post('/', async (req, res) => {
  const { ci, nombres, apellidos, curso } = req.body;
  const alumno = new Alumnos({ ci, nombres, apellidos, curso });
  await alumno.save().then(
    (a) => {
      res.json({ ok: true, msg: 'Alumno(a) registrado(a)' });
    }, (err) => {
      let errcode = err.errmsg.split(' ')[0]
      res.json({ ok: false, msg: errcode == 'E11000' ? 'Alumno(a) ya existente' : err.errmsg });
    });
});

router.put('/:ci', async (req, res) => {
  const ci = req.params.ci;
  const { nombres, apellidos, curso } = req.body;
  await Alumnos.findOneAndUpdate({ ci }, { nombres, apellidos, curso }, (a, err) => {
    if (err) return res.json({ ok: false, msg: { e: err } });
    if (!a) return res.json({ ok: false, msg: 'No encontrado(a)' });
    res.json({ ok: true, msg: 'Alumno(a) actualizado(a)' });
  });
});

router.delete('/:ci', async (req, res) => {
  const ci = req.params.ci;
  await Alumnos.findOneAndRemove({ ci }, (err, a) => {
    if (err) return res.json({ ok: false, msg: { e: err } });
    if (!a) return res.json({ ok: false, msg: 'No encontrado(a)' });
    res.json({ ok: true, msg: 'Alumno(a) eliminado(a)' });
  });
});

module.exports = router;