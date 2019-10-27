const Sequelize = require('sequelize');
const mysql12 = require('mysql2'); // Needed to fix sequelize issues with WebPack

const sequelize = new Sequelize('eventsdb', 'admin', 'Apa05Sak', {
    host: 'mydb.cwa4xgzyudas.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    dialectModule: mysql12
  });

  
  module.exports = sequelize;