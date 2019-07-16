const mongoose = require('mongoose');
const { Schema } = mongoose;
const Alumno = new Schema({
  ci: {
    type: Number,
    unique: true
  },
  nombres: String,
  apellidos: String,
  curso: String
});

module.exports = mongoose.model('Alumnos', Alumno);