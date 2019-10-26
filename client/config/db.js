const Sequelize = require('sequelize');

const db = new Sequelize('', 'admin', 'Apa05Sak', {
    host: 'mydb.cwa4xgzyudas.us-east-2.rds.amazonaws.com',
    dialect: 'mysql' 
  });

  
  module.exports = db;