const router = require("express").Router();
const uploadPics = require('../../utils/uploadPic');
const AWS = require("aws-sdk");
const multer = require('multer');
require('dotenv').config();



const AWS = require("aws-sdk");
//const multer = require('multer');

console.log('access : ',process.env.ACCESS_KEY_ID);
console.log('sec',process.env.SECRET);
(async function() {
    try {
        console.log('in try catch block');
        // set promises
        AWS.config.setPromisesDependency();
        AWS.config.update({
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET,
            region: "us-east-2"
        });

        const s3 = new AWS.S3();
        const response = await s3.listObjectsV2({
            Bucket: "project3.pic.library"/*,
            Prefix: "jackfolder"*/
        }).promise();

        console.log(response.Contents.length);
        console.log(response);
        
    } catch (err) {
        console.log('error : ',err)
    }
    
})();