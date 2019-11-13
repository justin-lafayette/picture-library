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
  console.log("File!")
  console.log(file)
  const s3FileURL = "https://s3-us-east-2.amaxonaws.com/project3.pic.library"

  let s3bucket = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET,
    region: "us-east-2"
  });

  //Where you want to store your file
  var params = {
    Bucket: "project3.pic.library",///jackfolder",
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
      var newFileUploaded = {
        description: req.body.description,
        fileLink: s3FileURL + file.originalname,
        s3_key: params.Key
      };
      // var document = new DOCUMENT(newFileUploaded);
      // document.save(function(error, newFile) {
      //   if (error) {
      //     throw error;
      //   }
      // });
    }
  });
});

module.exports = router;