const { Router } = require('express');
const router = new Router();
const modelos = require('../models');
router.get('/', async (req, res) => {
  let alumnos = [];
  await modelos.alumnos.findAll({})
    .then(resp => {
      alumnos = resp;
    }
    ).catch((err) => {
      console.log(err);
    });
  res.json(alumnos);
});
router.post('/', async (req, res) => {
  let alumno = {};
  await modelos.alumnos.create(req.body)
    .then(resp => {
      alumno = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  res.json(alumno);
});
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  let alumno = {};
  await modelos.alumnos.findOne({ where: { id } })
    .then(resp => {
      alumno = resp;
    }
    ).catch(err => {
      console.log(err);
    });
  res.json(alumno);
});
router.put('/:id', async (req, res) => {
  let mensaje = '';
  const id = req.params.id;
  await modelos.alumnos.findOne({ where: { id } })
    .then(alumno => {
      alumno.update(req.body);
      mensaje = 'Registro actualizado';
    })
    .catch((err) => {
      mensaje = err;
    });
  res.json({ mensaje });
});
router.delete('/:id', async (req, res) => {
  let mensaje = '';
  const id = req.params.id;
  await modelos.alumnos.findOne({ where: { id } })
    .then(alumno => {
      alumno.destroy();
      mensaje = 'Registro eliminado';
    })
    .catch((err) => {
      mensaje = err;
    });
  res.json({ mensaje });
});
module.exports = router;