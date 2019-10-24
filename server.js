const express = require('express');

const PORT = process.env.PORT || 5002;

const body_parser = require('body-parser');
const path = require('path');

const db = require('./client/config/db');
  
db.authenticate()
  .then(() => {console.log('Database connected...');})
  .catch((err)=>{console.error('Unable to connect to the database:', err);});

  