import express from "express";
import dotenv from "dotenv";
dotenv.config();

import "./src/database";

import homeRoutes from "./src/routes/homeRoutes";
import ferramentaRoutes from "./src/routes/ferramentaRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/ferramentas/", ferramentaRoutes);
  }
}

export default new App().app;
