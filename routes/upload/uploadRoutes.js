const pictureControlller = require("../../controller/picturesController");
const router = require("express").Router();
const uploadPics = require('../../utils/uploadPic');
const AWS = require("aws-sdk");
const multer = require('multer');
require('dotenv').config();


var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

console.log("s3 instance created");

// Matches with "/uploadpic"
router.route('/uploadpic') 
.post(upload.single("image"), function(req, res) {
  const file = req.file;
  console.log("In UploadRoutes.js - File!")
  console.log(file)
  const s3FileURL = "https://s3-us-east-2.amaxonaws.com/project3.pic.library"

  let s3bucket = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET,
    region: "us-east-2"
  });

  //Where you want to store your file
  const folderName = "Events";
  const urlPrefix = "https://s3.us-east-2.amazonaws.com/project3.pic.library/"+folderName+"/";
  var params = {
    Bucket: "project3.pic.library"+"/"+folderName, // need to add event_id here
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read"
  };

  s3bucket.upload(params, function(err, data) {
    if (err) {
      console.log("UPLOAD ERROR")
      console.log(err);
      res.status(501).json(err);
    } else {
      res.send({ data });
       // sample url https://s3.us-east-2.amazonaws.com/project3.pic.library/Eventsfolder/wedding_1.jpg

      var newFileUploaded = {
        description: req.body.description,
        fileLink: s3FileURL + '/' +file.originalname,
        s3_key: params.Key
      };
      var fileUrl =  urlPrefix+file.originalname;
        
      // var document = new DOCUMENT(newFileUploaded);
      // document.save(function(error, newFile) {
      //   if (error) {
      //     throw error;
      //   }
      // });
      console.log("file link",fileUrl);
    }
  });
});

module.exports = router;


