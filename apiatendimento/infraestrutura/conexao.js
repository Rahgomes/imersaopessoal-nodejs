require("dotenv").config();
const sql = require("mssql");

const conexao = sql.connect({
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  stream: false,
  options: {
    enableArithAbort: true,
    encrypt: true,
  },
  port: Number(process.env.SQL_USER),
  user: process.env.SQL_USER,
  server: process.env.SQL_SERVER,
});

module.exports = conexao;
