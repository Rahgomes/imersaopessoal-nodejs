const Atendimentos = require("../models/Atendimentos");

exports.index = async (req, res) => {
  await Atendimentos.lista(res);
};

exports.show = async (req, res) => {
  const id = parseInt(req.params.id);
  await Atendimentos.buscaPorId(id, res);
};

exports.update = async (req, res) => {
  const id = parseInt(req.params.id);
  const valores = req.body;

  await Atendimentos.altera(id, valores, res);
};

exports.store = async (req, res) => {
  const atendimento = req.body;
  await Atendimentos.adiciona(atendimento, res);
};

exports.delete = async (req, res) => {
  const id = parseInt(req.params.id);
  await Atendimentos.deleta(id, res);
};
