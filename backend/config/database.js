const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tsm', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Disable logging, bisa diaktifkan jika diperlukan
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = { sequelize, testConnection };
