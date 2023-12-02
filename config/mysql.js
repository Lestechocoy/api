const mysql = require('mysql');
const util = require('util');
const config = require('./config');

const dbconfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

const conexion = mysql.createConnection(dbconfig);

// Convierte las funciones de devolución de llamada en promesas
const query = util.promisify(conexion.query).bind(conexion);

async function conMysql() {
  try {
    await conexion.connect();
    console.log('DB conectada exitosamente');
  } catch (error) {
    console.error('[db error]', error);
    setTimeout(conMysql, 200);
  }
}

module.exports = {
  conMysql,
  query, // Exporta la función 'query' promisificada
};

