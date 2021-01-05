const bcrypt = require('bcrypt');

('use strict');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = bcrypt.hashSync('123456', 10);

    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'user@example.com',
          password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
