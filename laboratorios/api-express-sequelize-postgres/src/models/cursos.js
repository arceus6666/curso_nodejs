module.exports = (sequelize, Sequelize) => {
  const Cursos = sequelize.define('cursos121', {
    id: { type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true },
    nombre: Sequelize.STRING
  });
  return Cursos;
}