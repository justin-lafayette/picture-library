const db = require("../../models");
const router = require("express").Router();
const uploadPics = require("../../utils/uploadPic");
const AWS = require("aws-sdk");
const multer = require("multer");
require("dotenv").config();

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

console.log("s3 instance created");

// Matches with "/uploadpic"
router.route("/uploadpic").post(upload.single("image"), function(req, res) {
  console.log(req.body.event_id);
  const eventId = req.body.event_id;
  const file = req.file;
  console.log("In UploadRoutes.js - File!");
  console.log(file);
  const s3FileURL = "https://s3-us-east-2.amaxonaws.com/project3.pic.library";

  let s3bucket = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET,
    region: "us-east-2"
  });
  // Use the event_id to create or use a folder for the images
  const folderName = eventId;
  //Where you want to store your file
  // const folderName = "Events";
  const urlPrefix =
    "https://s3.us-east-2.amazonaws.com/project3.pic.library/" +
    folderName +
    "/";
  var params = {
    Bucket: "project3.pic.library" + "/" + folderName, // need to add event_id here
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read"
  };

  s3bucket.upload(params, function(err, data) {
    if (err) {
      console.log("UPLOAD ERROR", err);
      res.status(501).json(err);
    } else {
      res.send({ data });
      // sample url https://s3.us-east-2.amazonaws.com/project3.pic.library/Eventsfolder/wedding_1.jpg

      var newFileUploaded = {
        description: req.body.description,
        fileLink: s3FileURL + "/" + file.originalname,
        s3_key: params.Key
      };
      var fileUrl = urlPrefix + file.originalname;
      //isnert a row in the pictures table
      // const request = {
      //   title : file.originalname,
      //   picture_url: fileUrl,
      //   event_id: eventId
      // };
      const response= savePictureToDB(
        {
          title: file.originalname,
          picture_url: fileUrl,
          event_id: eventId
        });

      // var document = new DOCUMENT(newFileUploaded);
      // document.save(function(error, newFile) {
      //   if (error) {
      //     throw error;
      //   }
      // });
      console.log("file link", fileUrl);
    }
  });
});

function savePictureToDB(request) {
  db.pictures
    .create(request)
    .then(function(picture) {
      console.log("picture row created picture"); // - ',picture);
      return { picture: picture, error: null };
    })
    .catch(err => {
      console.log("cannot create a row in the pictures table error- ", err);
      return { picture: null, error: err };
    });
}
module.exports = router;
