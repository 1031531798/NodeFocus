const mysql = require('mysql');
const cors = require('cors');
var app;

class useMysql {
  constructor () {
    this.option = {
      host: 'sh-cynosdbmysql-grp-1z48nf16.sql.tencentcdb.com',
      user: 'root',
      password: 'Lzj1031531798',
      port: '27003',
      database: 'zzdc',
      connectTimeout: 5000,
      multipleStatements: false
    };
    this.conn = mysql.createConnection(this.option);
  }
}