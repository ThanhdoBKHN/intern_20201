const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('join', {
    //   task_id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
      task_completed: {
        type: Sequelize.STRING,
      },
      task_false: {
        type: Sequelize.STRING,
      },
      process: {
        type: Sequelize.STRING,
      },
      time_start: {
        type: Sequelize.STRING,
      },
      status: {
        type: DataTypes.ENUM,
        values: [
          'true',
          'false',
        ],
        defaultValue: 'true',
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
