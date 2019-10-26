const Sequelize = require('sequelize');
const mysql12 = require('mysql2'); // Needed to fix sequelize issues with WebPack

const db = new Sequelize('', 'admin', 'Apa05Sak', {
    host: 'mydb.cwa4xgzyudas.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    dialectModule: mysql12 // Needed to fix sequelize issues with WebPack
  });

  
  module.exports = db;