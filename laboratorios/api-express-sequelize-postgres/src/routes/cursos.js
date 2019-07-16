const { Router } = require('express');
const router = new Router();
const modelos = require('../models/');
router.get('/', async (req, res) => {
  let cursos = [];
  await modelos.cursos.findAll({})
    .then(resp => {
      cursos = resp;
    }
    ).catch((err) => {
      console.log(err);
    });
  res.json(cursos);
});
router.post('/', async (req, res) => {
  let curso = {};
  await modelos.cursos.create(req.body)
    .then(resp => {
      curso = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  res.json(curso);
});
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  let curso = {};
  await modelos.cursos.findOne({ where: { id } })
    .then(resp => {
      curso = resp;
    }
    ).catch(err => {
      console.log(err);
    });
  res.json(curso);
});
router.put('/:id', async (req, res) => {
  let mensaje = '';
  const id = req.params.id;
  await modelos.cursos.findOne({ where: { id } })
    .then(curso => {
      curso.update(req.body);
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
  await modelos.cursos.findOne({ where: { id } })
    .then(curso => {
      curso.destroy();
      mensaje = 'Registro eliminado';
    })
    .catch((err) => {
      mensaje = err;
    });
  res.json({ mensaje });
});
module.exports = router;