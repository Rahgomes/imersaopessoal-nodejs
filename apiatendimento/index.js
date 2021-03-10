const express = require("express");
const app = express();
const conexao = require("./infraestrutura/conexao");
const Tabela = require("./infraestrutura/Tabela");
require("dotenv").config();

conexao
  .then(() => {
    console.log("conectado");
    Tabela.init();
    app.emit("pronto");
  })
  .catch((err) => {
    app.emit("pronto");
    console.log(err);
  });

const atendimentos = require("./routes/atendimentoRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/atendimentos/", atendimentos);

const port = process.env.PORT;

app.on("pronto", () => {
  app.listen(
    port,
    console.log("Servidor iniciado com êxito!"),
    console.log("http://localhost:3000")
  );
});
