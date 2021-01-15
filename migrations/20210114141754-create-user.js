'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM,
        values: [
          'lock',
          'unlock'
        ],
        defaultValue: 'unlock',
      },
      role: {
        type: Sequelize.ENUM,
        values: [
          'user',
          'trainee',
          'supervisor',
          'admin',
        ],
        defaultValue: 'user',
      },
      count_false: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};