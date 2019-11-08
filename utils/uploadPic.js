const AWS = require("aws-sdk");
console.log("required AWS");

const fs = require("fs");

console.log("B4 AWS.config.update");

module.exports = {
  execS3: function(req, res) {
    AWS.config.update({
//give access key here    
});

    console.log("after AWS.config.update");

    var s3 = new AWS.S3();
    console.log("s3 instance created");

    var filePath = "./client/src/assets/images/birthday_3.jpg";
    console.log("filepath");
    //configuring parameters
    // var params = {
    //   Bucket: "project3.pic.library",
    //   //Body: fs.createReadStream(filePath),
    //   //Key: "folder/" + Date.now() + "_" + path.basename(filePath)
    //   Body: fs.createReadStream(filePath),
    //   Key: "folder/" + Date.now() + "_" + "File1"
    // };

    console.log("params");

    // s3.upload(params, function(err, data) {
    //   //handle error
    //   if (err) {
    //     console.log("Error in s3 upload", err);
    //   }

    //   //success
    //   if (data) {
    //     console.log("Uploaded in:", data.Location);
    //   }
    // });
    const upload = multer({
      storage: multerS3({
          s3: s3,
          bucket: 'bucket-name',
          key: function (req, file, cb) {
              console.log(file);
              cb(null, file.originalname); //use Date.now() for unique file keys
          }
      })
  });
  }
};
