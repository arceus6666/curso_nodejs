const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/evaluacion');

router.get('/', async (req, res) => {
  const data = await ctrl.getAll();
  res.render('index', { data });
});

router.post('/insertar', async (req, res, next) => {
  await ctrl.insert(req.body);
  res.redirect('/evaluacion-cognos');
});

module.exports = router;