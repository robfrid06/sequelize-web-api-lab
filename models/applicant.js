'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Applicant.belongsTo(models.Position, {foreignKey: 'positionId'})
    }
  }
  Applicant.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    skills: DataTypes.ARRAY(DataTypes.STRING),
    positionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Positions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Applicant',
  });
  return Applicant;
};