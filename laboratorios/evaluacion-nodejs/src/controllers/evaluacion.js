const Evaluacion = require('../models/Evaluacion');

const getAll = () => {
  return Evaluacion.find({});
}

const insert = (body) => {
  const {
    curso,
    instructor,
    pregunta1,
    pregunta2,
    pregunta3,
    pregunta4,
    pregunta5,
    pregunta6,
    pregunta7,
    pregunta8,
    comentario
  } = body;
  const eval = new Evaluacion({
    curso,
    instructor,
    pregunta1,
    pregunta2,
    pregunta3,
    pregunta4,
    pregunta5,
    pregunta6,
    pregunta7,
    pregunta8,
    comentario
  });

  return eval.save();
}

module.exports = {
  getAll,
  insert
}