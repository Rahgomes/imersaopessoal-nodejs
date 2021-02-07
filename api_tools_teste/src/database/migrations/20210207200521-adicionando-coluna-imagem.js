module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("ferramentas", "imagem", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async () => {},
};
