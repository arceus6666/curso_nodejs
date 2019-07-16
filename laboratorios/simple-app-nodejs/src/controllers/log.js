const fs = require('fs')
const morgan = require('morgan')
const path = require('path')

const accesLogStream = fs.createWriteStream(
  path.join(__dirname, '../log/server.log'),
  { flags: 'a' }
);

module.exports = morgan('combined', { stream: accesLogStream });

