const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: '192.168.0.119',
  database: 'cognosdb',
  password: '123456',
  port: 5432
});

module.exports = pool; 