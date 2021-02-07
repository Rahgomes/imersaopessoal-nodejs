import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Ferramenta from "../models/Ferramenta";

const models = [Ferramenta];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
