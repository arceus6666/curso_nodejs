const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlumnosSchema = Schema({
  ci: Number,
  nombres: String,
  apellidos: String
});
module.exports = mongoose.model('Alumnos', AlumnosSchema);