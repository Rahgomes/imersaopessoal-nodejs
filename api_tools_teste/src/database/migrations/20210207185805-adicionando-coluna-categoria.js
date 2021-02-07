module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("ferramentas", "categoria", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async () => {},
};
