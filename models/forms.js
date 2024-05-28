'use strict';
const {
  Model, DataTypes
} = require('sequelize');
const { sequelize } = require("../config")

const { forms } = require("../config/databases")
class Forms extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Forms.init({
  fullName: DataTypes.STRING,
  email: DataTypes.STRING,
  subject: DataTypes.STRING,
  message: DataTypes.STRING
}, {
  sequelize,
  paranoid: true,
  modelName: forms,
});
module.exports = Forms