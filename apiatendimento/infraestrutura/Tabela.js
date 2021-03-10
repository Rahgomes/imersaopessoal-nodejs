const sql = require("mssql");

class Tabela {
  init() {
    this.criarAtendimentos();
  }

  criarAtendimentos() {
    const table = new sql.Table("Atendimentos");
    table.create = true;
    table.columns.add("id", sql.Int, {
      identity: true,
      primary: true,
      nullable: false,
    });
    table.columns.add("cliente", sql.VarChar(50), { nullable: false });
    table.columns.add("pet", sql.VarChar(20), { nullable: false });
    table.columns.add("servico", sql.VarChar(20), { nullable: false });
    table.columns.add("data", sql.DateTime, { nullable: false });
    table.columns.add("dataCriacao", sql.DateTime, { nullable: false });
    table.columns.add("status", sql.VarChar(20), { nullable: false });
    table.columns.add("observacoes", sql.VarChar(50), { nullable: true });

    const request = new sql.Request();
    request
      .bulk(table)
      .then((result) => result)
      .catch((err) => err);
  }
}

module.exports = new Tabela();
