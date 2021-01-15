'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  QuestionStatus.init({
    status: DataTypes.ENUM({
      values: ['true', 'false']
    })
  }, {
    sequelize,
    modelName: 'QuestionStatus',
  });
  return QuestionStatus;
};