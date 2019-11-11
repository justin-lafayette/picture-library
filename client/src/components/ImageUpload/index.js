import React, { Component } from "react"
import Dropzone from "react-dropzone"
//import 
import {Button} from 'react-bootstrap'
import Api from "../../utils/Api";
import {Jumbotron} from 'react-bootstrap';

import { FaFileUpload } from 'react-icons/fa';
// import ReactCrop from 'react-image-crop'
// import 'react-image-crop/dist/ReactCrop.css';
import './style.css';

const imageMaxSize = 100000000;
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item)=>{return item.trim()})
class ImageUpload extends  Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      imgSrc: null,
      // crop: {
      //   aspect: 1/1
      // }
    }
  }

  verifyFile = (files) =>{
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        alert("This file is not allowed. " + currentFileSize + " bytes is too large")
        return false
      }
      if (!acceptedFileTypesArray.includes(currentFileType)){
        alert("This file is not allowed. Only images are allowed.")
        return false
      }
      return true
  }
}
  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      console.log(rejectedFiles)
      this.verifyFile(rejectedFiles)
    }

    if (files && files.length > 0) {
      const isVerified = this.verifyFile(files)
      if (isVerified){
        // imageBase64Data
        const currentFile = files[0];
        this.setState({file: currentFile});
      }
    }
  }
  handleOnCropChange = (crop)=> {
    console.log(crop)
    this.setState({crop})
    console.log(this.state)
  }

  handleFormSubmit = event => {
    event.preventDefault();

    //console.log("imgSrc", this.state.imgSrc)
    console.log("FILE!");
    console.log(this.state.file);
    const formData = new FormData();
    formData.append('image',this.state.file, "this.state.filename");

    Api.uploadPic(formData)
      .then()
      .catch( err => console.log(err));
  }
  render() {
  //   const dropzoneStyle = {
  //     width  : "500px",
  //     height : "500px",
  //     border : "5px solid black"
  // };
    const {imgSrc} = this.state
    return (
      <>
         
        
        <div className="ImageUpload">
        <Jumbotron className="text-center">
        
          <h1>Image Upload</h1>
          {imgSrc !== null ?
          <div> 
            {/* {imgSrc} */}
          <img className={"dropzone-custom"} src ={imgSrc} alt = ' ' /> 
          </div>: ''}

          {/* // <div>
          // <ReactCrop src = {imgSrc} crop ={this.state.crop} onChange={this.handleOnCropChange}/>
          // </div>:''}  */}
          
            <Dropzone
              className=""
              onDrop={this.handleOnDrop}
              multiple={false}
              accept={acceptedFileTypes}
              maxSize={imageMaxSize}
              minSize={0}
              // style= {dropzoneStyle}
              
            >
              {({ getRootProps, getInputProps }) => (
              // className="dropzone-custom"
                  <div   {...getRootProps()} >
                    <input {...getInputProps()} />
                    
                      Drag 'n' drop image here, or click to select files <FaFileUpload/>
                    
                  </div>
                
                
                
              )}
            </Dropzone>
            </Jumbotron>
          
              {
              // this is from add-s3 branch. Do we need this button and the click handler?  
              // <Button
              //   onClick={this.handleFormSubmit}
              // >
              //   Upload
              // </Button>
    
            
            /* <button type="submit" className="btn btn-primary mb-2">
              Upload
            </button> */}
          
        </div>
      </>
    )
  }
}

export default ImageUpload;