const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Card }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userid' });
      this.belongsTo(Card, { foreignKey: 'cardid' });
    }
  }
  Comment.init({
    com: DataTypes.TEXT,
    userid: DataTypes.INTEGER,
    cardid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
