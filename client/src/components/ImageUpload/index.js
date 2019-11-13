import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Button } from "react-bootstrap";
import Api from "../../utils/Api";
import { Jumbotron } from "react-bootstrap";
import { FaFileUpload } from "react-icons/fa";
// import ReactCrop from 'react-image-crop'
// import 'react-image-crop/dist/ReactCrop.css';
import "./style.css";

const imageMaxSize = 100000000;
const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map(item => {
  return item.trim();
});
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imgSrc: null
      
    };
  }

  verifyFile = files => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        alert(
          "This file is not allowed. " + currentFileSize + " bytes is too large"
        );
        return false;
      }
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        alert("This file is not allowed. Only images are allowed.");
        return false;
      }
      return true;
    }
  };
  
  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      console.log(rejectedFiles);
      this.verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = this.verifyFile(files);
      if (isVerified) {
        // imageBase64Data
        const currentFile = files[0];
        this.setState({ file: currentFile });
        const myFileReader = new FileReader();
        myFileReader.addEventListener(
          "load",
          () => {
            console.log(myFileReader.result);
            this.setState({
              imgSrc: myFileReader.result
            });
          },
          false
        );
        myFileReader.readAsDataURL(currentFile);
      }
    }
  };
 

  handleFormSubmit = event => {
    event.preventDefault();
    
    console.log("in ImageUpload - FILE!");
    console.log(this.state.file);
    console.log(this.props.event_id);
    const formData = new FormData();
    formData.append('image',this.state.file, this.state.filename);
    formData.append('event_id', this.props.event_id)

    Api.uploadPic(formData)
      .then(

      )
      .catch( err => console.log(err));
    
  }

  render() {
   
    const { imgSrc } = this.state;
    return (
      <>
        <div className="ImageUpload">
          <Jumbotron className="text-center">
            <h1>Image Upload</h1>

            <Dropzone
              className=" "
              onDrop={this.handleOnDrop}
              multiple={false}
              accept={acceptedFileTypes}
              maxSize={imageMaxSize}
              minSize={0}
              
            >
              {({ getRootProps, getInputProps }) => (
                <div className="dropzone-custom" {...getRootProps()}>
                  {imgSrc !== null ? (
                    <div>
                      <img className={"dropzone-custom"} src={imgSrc} alt=" " />
                    </div>
                  ) : (
                    ""
                  )}
                  <FaFileUpload id = "iconid"/>
                  <br />
                  <p style={{ marginBottom: 0 }}>Drag and Drop image here</p>
                  <p style={{ marginBottom: 0 }}>or</p>
                  <input {...getInputProps()} />
                  <br />
                  <button type="submit" className="btn btn-primary mb-2">
                    Browse Files
                  </button>
                </div>
              )}
            </Dropzone>
          </Jumbotron>

          <Button onClick={this.handleFormSubmit} type="submit">
            Upload
          </Button>
        </div>
      </>
    );
  }
}

export default ImageUpload;
