'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    tel: DataTypes.STRING,
    birthday: DataTypes.DATE,
    status: DataTypes.ENUM({
      values: ['lock', 'unlock']
    }),
    role: DataTypes.ENUM({
      values: [ 'user',
      'trainee',
      'supervisor',
      'admin']
    }),
    count_false: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};