const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Jozé Santos 1",
          email: "jsantos1@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Jozé Santos 2",
          email: "jsantos2@gmail.com",
          password_hash: await bcryptjs.hash("456987", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Jozé Santos 3",
          email: "jsantos3@gmail.com",
          password_hash: await bcryptjs.hash("456887", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async () => {},
};
