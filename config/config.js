require('dotenv').config();
module.exports = {
    app: {
      port: process.env.PORT || 3001,
    },

    // mysql: {
    //     host: process.env.MYSQL_HOST || 'localhost',
    //     user: process.env.MYSQL_USER || 'root',
    //     password: process.env.MYSQL_PASSWORD || '',
    //     database: process.env.MYSQL_DB || 'chocoy'
    // }
  /* mysql: {
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'tecnoxum_chocoy',
      password: process.env.MYSQL_PASSWORD || '@Chocoy2023@',
      database: process.env.MYSQL_DB || 'tecnoxum_chocoy'
  }*/

   mysql: {
    host: process.env.MYSQL_HOST || 'server0751.hostilimitado.com',
    user: process.env.MYSQL_USER || 'tecnoxum_chocoy',
    password: process.env.MYSQL_PASSWORD || '@Chocoy2023@',
    database: process.env.MYSQL_DB || 'tecnoxum_chocoy'
}

  };
