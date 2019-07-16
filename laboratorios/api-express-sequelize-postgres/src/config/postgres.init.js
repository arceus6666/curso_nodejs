const Sequelize = require('sequelize')
const sequelize = new Sequelize('cognosdb', 'postgres', '123456', {
  host: '192.168.0.119',
  dialect: 'postgres',
})
sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  });
const Alumnos = sequelize.define('alumnos121', {
  id: { type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true },
  nombres: Sequelize.STRING,
  apellidos: Sequelize.STRING,
  doc_identidad: Sequelize.STRING
});
Alumnos.sync({ force: true }).then(() => {
  console.log('Tabla alumnos121 creada');
  return true;
});
const Cursos = sequelize.define('cursos121', {
  id: { type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true },
  nombre: Sequelize.STRING,
})
Cursos.sync({ force: true }).then(() => {
  console.log('Tabla cursos121 creada');
  return true;
})
module.exports = sequelize;