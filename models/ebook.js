'use strict';
const {
  Model, DataTypes
} = require('sequelize');
const { sequelize } = require("../config")
const { ebooks } = require("../config/databases")

class Ebook extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Ebook.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  official_email: DataTypes.STRING,
  phone_number: DataTypes.STRING,
  company: DataTypes.STRING,
  job_title: DataTypes.STRING,
  country: DataTypes.STRING
}, {
  sequelize,
  paranoid: true,
  modelName: ebooks,
});
module.exports = Ebook