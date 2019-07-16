const Sequelize = require('sequelize')
const sequelize = new Sequelize('cognosdb', 'postgres', '123456', {
  host: '192.168.0.119',
  dialect: 'postgres',
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.alumnos = require('../models/alumnos')(sequelize, Sequelize);
db.cursos = require('../models/cursos')(sequelize, Sequelize);
module.exports = db;