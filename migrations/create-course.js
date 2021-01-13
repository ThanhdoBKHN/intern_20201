const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('course', {
      course_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      overview: {
        type: Sequelize.STRING,
      },
      pdf: {
        type: Sequelize.STRING,
      },
      status: {
        type: DataTypes.ENUM,
        values: [
          'public',
          'private',
        ],
        defaultValue: 'private',
      },
      time_max: {
        type: Sequelize.INTEGER,
      },
      // task: {
      //   type: DataTypes.ARRAY(DataTypes.INTEGER),
      // },
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
