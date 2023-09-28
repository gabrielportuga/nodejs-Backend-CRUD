const { v4: uuidv4 } = require('uuid');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Card.init({
    titulo: DataTypes.STRING,
    conteudo: DataTypes.STRING,
    lista: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
  });

  Card.beforeCreate(card => card.id = uuidv4());

  return Card;
};