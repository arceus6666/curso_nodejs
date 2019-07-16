const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EvaluacionSchema = Schema({
  curso: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  pregunta1: {
    type: String,
    enum: ['Muy Rapido', 'Rapido', 'Normal', 'Lento'],
    required: true
  },
  pregunta2: {
    type: String,
    enum: ['Muy Bueno', 'Bueno', 'Regular', 'Malo'],
    required: true
  },
  pregunta3: {
    type: String,
    enum: ['Muy Bueno', 'Bueno', 'Regular', 'Malo'],
    required: true
  },
  pregunta4: {
    type: String,
    enum: ['Muy Bueno', 'Bueno', 'Regular', 'Malo'],
    required: true
  },
  pregunta5: {
    type: String,
    enum: ['Muy Bueno', 'Bueno', 'Regular', 'Malo'],
    required: true
  },
  pregunta6: {
    type: String,
    enum: ['Muy Bueno', 'Bueno', 'Regular', 'Malo'],
    required: true
  },
  pregunta7: {
    type: String,
    enum: ['Muy Bueno', 'Bueno', 'Regular', 'Malo'],
    required: true
  },
  pregunta8: {
    type: String,
    enum: ['Muy Bueno', 'Bueno', 'Regular', 'Malo']
  },
  comentario: String
});

module.exports = mongoose.model('Evaluacion', EvaluacionSchema);