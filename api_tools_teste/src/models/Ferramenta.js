import Sequelize, { Model } from "sequelize";

export default class Ferramenta extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "O campo de Nome precisa ter entre 3 e 255 caracteres.",
            },
          },
        },
        descricao: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O campo de Descrição não pode ficar vazio.",
            },
          },
        },
        categoria: {
          type: Sequelize.STRING,
          defaultValue: "Default",
          validate: {
            notEmpty: {
              msg: "O campo de Categoria não pode ficar vazio.",
            },
          },
        },
        imagem: {
          type: Sequelize.STRING,
          defaultValue: "Default",
          validate: {
            notEmpty: {
              msg: "Insira uma imagem",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "ferramentas",
      }
    );

    return this;
  }
}
