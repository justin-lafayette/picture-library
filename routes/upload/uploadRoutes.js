const pictureControlller = require("../../controller/picturesController");
const router = require("express").Router();
const uploadPics = require('../../utils/uploadPic');
const AWS = require("aws-sdk");
const multer = require('multer');
const multerS3 = require('multer-s3');

var s3 = new AWS.S3({      
//give api key here
});

console.log("s3 instance created");
//configuring parameters
// var params = {
//   Bucket: "project3.pic.library",
//   //Body: fs.createReadStream(filePath),
//   //Key: "folder/" + Date.now() + "_" + path.basename(filePath)
//   Body: fs.createReadStream(filePath),
//   Key: "folder/" + Date.now() + "_" + "File1"
// };
// const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: 'project3.pic.library',
//         key: function (req, file, cb) {
//             console.log("HEY WE MADE IT TO MULTER");
//             console.log(file);
//             cb(null, Date.now()); //use Date.now() for unique file keys
//         }
//     })
// });
var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'project3.pic.library',
      metadata: function (req, file, cb) {
        console.log("FILE.FIELDNAME");
        console.log(file)
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        console.log("in key function")
        cb(null, Date.now().toString())
      }
    })
  });

// Matches with "/uploadpic"
router.route('/uploadpic')
.post(upload.array('folder',1), (req, res) => {
    console.log("got to multer-s3 callback");
    console.log(req);
    console.log("====================================");
    console.log(res);
    res.send(req.file);
});

module.exports = router;