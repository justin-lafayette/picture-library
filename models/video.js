const Sequelize = require("sequelize");

const sequelize = require("../config/connection");

const video = sequelize.define(
  "video",
  {
    video_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    video_file : Sequelize.BLOB,
    video_url: Sequelize.STRING
  },
  {
    freezeTableName: true
  }
);

module.exports = video;
