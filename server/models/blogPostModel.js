const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class BlogPost extends Model {}
BlogPost.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'BlogPost',
});

module.exports = BlogPost;
