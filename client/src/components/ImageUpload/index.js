import React, { Component } from "react"
import Dropzone from "react-dropzone"
import {Jumbotron} from 'react-bootstrap'
// import { FiUpload } from 'react-icons/fa';
// import ReactCrop from 'react-image-crop'
// import 'react-image-crop/dist/ReactCrop.css';
import "./style.css"

const imageMaxSize = 100000000;
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item)=>{return item.trim()})
class ImageUpload extends  Component {
  constructor(props){
    super(props)
    this.state = {
      imgSrc: null
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
        const currentFile = files[0]
        const myFileReader = new FileReader()
        myFileReader.addEventListener("load", () => {
          console.log (myFileReader.result)
          this.setState({
            imgSrc: myFileReader.result
          })
        }, false)
        myFileReader.readAsDataURL (currentFile)
      }
    }
  }
  handleOnCropChange = (crop)=> {
    console.log(crop)
    this.setState({crop})
    console.log(this.state)
  }
  render() {
    const dropzoneStyle = {
      width  : "100%",
      height : "20%",
      border : "1px solid black"
  };
    const {imgSrc} = this.state
    return (
      <div>
      <Jumbotron className="text-center">
      
        <h1>Image Upload</h1>
        {imgSrc !== null ?
        <div> 
          {imgSrc}
        <img src ={imgSrc} alt = ' ' /> 
        </div>: ''}

        {/* // <div>
        // <ReactCrop src = {imgSrc} crop ={this.state.crop} onChange={this.handleOnCropChange}/>
        // </div>:''}  */}
        
          <Dropzone
            className = " "
            onDrop={this.handleOnDrop}
            multiple={false}
            accept={acceptedFileTypes}
            maxSize={imageMaxSize}
            minSize={0}
            style= {dropzoneStyle}
            
          >
            {({ getRootProps, getInputProps }) => (
            
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  
                    Drag 'n' drop image here, or click to select files
                  
                </div>
              
              
             )}
          </Dropzone>
          </Jumbotron>
        
          {/* <button type="submit" className="btn btn-primary mb-2">
            Upload
          </button> */}
        
      </div>
    )
  }
}

export default ImageUpload;