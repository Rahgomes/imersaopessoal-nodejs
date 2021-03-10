const sql = require("mssql");
const moment = require("moment");

class Atendimentos {
  adiciona(atendimento, res) {
    const request = new sql.Request();
    const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    const atendimentoDatado = { ...atendimento, dataCriacao };
    request
      .input("id", atendimentoDatado.id)
      .input("cliente", atendimentoDatado.cliente)
      .input("pet", atendimentoDatado.pet)
      .input("servico", atendimentoDatado.servico)
      .input("status", atendimentoDatado.status)
      .input("observacoes", atendimentoDatado.observacoes)
      .input("dataCriacao", atendimentoDatado.dataCriacao)
      .query(
        `INSERT INTO Atendimentos (id, cliente, pet, servico, status, observacoes, dataCriacao) 
        VALUES 
        (@id, @cliente, @pet, @servico, @status, @observacoes, @dataCriacao)`,
        (err) => {
          if (err) {
            res.status(400).json(err);
          } else {
            res.status(201).json(atendimentoDatado);
          }
        }
      );
  }

  lista(res) {
    const request = new sql.Request();
    request.query("SELECT * FROM Atendimentos", (err, result) => {
      const atendimento = result.recordset;
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(atendimento);
      }
    });
  }

  buscaPorId(id, res) {
    const request = new sql.Request();
    request.query(
      `SELECT * FROM Atendimentos WHERE id=${id}`,
      (err, result) => {
        const atendimento = result.recordset[0];
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(200).json(atendimento);
        }
      }
    );
  }

  altera(id, valores, res) {
    const request = new sql.Request();
    request
      .input("cliente", valores.cliente)
      .input("pet", valores.pet)
      .input("servico", valores.servico)
      .input("status", valores.status)
      .input("observacoes", valores.observacoes)
      .input("dataCriacao", valores.dataCriacao)
      .query(
        `UPDATE Atendimentos SET cliente=@cliente, pet=@pet, servico=@servico,
         status=@status, observacoes=@observacoes WHERE id=${id}`,
        (err) => {
          if (err) {
            res.status(400).json(err);
          } else {
            res.status(200).json(valores);
          }
        }
      );
  }

  deleta(id, res) {
    const request = new sql.Request();
    request.query(`DELETE FROM Atendimentos WHERE id=${id}`, (err) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(`O ID = ${id} foi deletado.`);
      }
    });
  }
}

module.exports = new Atendimentos();
