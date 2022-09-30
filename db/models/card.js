const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment }) {
      // define association here
      this.hasMany(Comment, { foreignKey: 'cardid' });
    }
  }
  Card.init({
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    lng: DataTypes.FLOAT,
    lat: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
