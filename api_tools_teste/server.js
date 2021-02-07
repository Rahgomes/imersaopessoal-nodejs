import app from "./app";

const port = process.env.PORT;
app.listen(port, () => {
  console.log();
  console.log(`Escutando a porta ${port}`);
  console.log(`endereço local: http://localhost:${port}`);
});
