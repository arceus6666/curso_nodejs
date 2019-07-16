const { Router } = require('express');
const pool = require('../db');
const router = new Router();

router.get('/', (req, res) => {
  pool.query(
    'SELECT * FROM alumno ORDER BY id_alumno ASC',
    (error, results) => {
      if (error) { throw error; }
      res.status(200).json(results.rows);
    }
  );
});

router.post('/', (req, res) => {
  const { nombre, apellido, email, doc_identidad } = req.body;
  pool.query(
    'INSERT INTO alumno (nombre, apellido, email, doc_identidad) VALUES ($1, $2, $3, $4) RETURNING id_alumno',
    [nombre, apellido, email, doc_identidad],
    (error, results) => {
      if (error) { throw error; }
      res.status(200).json({ response: results.rows[0].id_alumno });
    }
  )
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM alumno WHERE id_alumno = $1",
    [id],
    (error, results) => {
      if (error) { throw error; }
      res.status(200).json(results.rows);
    }
  )
});
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, apellido, email, doc_identidad } = req.body;
  pool.query(
    "UPDATE alumno SET nombre = $1, apellido = $2, email = $3, doc_identidad = $4 WHERE id_alumno = $5",
    [nombre, apellido, email, doc_identidad, id],
    (error, results) => {
      if (error) { throw error; }
      res.status(200).send(`User modified with ID: ${id}`);
    }
  )
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "DELETE FROM alumno WHERE id_alumno = $1",
    [id],
    (error, results) => {
      if (error) { throw error; }
      res.status(200).send(`User deleted with ID: ${id}`);
    }
  );
});

module.exports = router;
