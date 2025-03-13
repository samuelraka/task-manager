const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('member', 'admin', 'guest'),
    allowNull: false,
    defaultValue: 'member',
  },
  plan: {
    type: DataTypes.ENUM('free', 'premium'),
    allowNull: false,
    defaultValue: 'free',
  },
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = User;
