'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Booking.init({
    
    statusId: DataTypes.STRING, //statusId trong allcode là key nên là string
    doctorId: DataTypes.INTEGER,//doctorId là id của user nên là Integer
    patientID: DataTypes.INTEGER,
    date: DataTypes.STRING,
    timeType: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};