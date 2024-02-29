'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.hasMany(models.Airport,{
        foreignKey:'cityId'
      });
    }
  }
  City.init({
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
    },
    data: {
      type: DataTypes.TEXT, // Use TEXT data type to store JSON data as a string
      allowNull: true // Allow null if the column is optional
    }
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};