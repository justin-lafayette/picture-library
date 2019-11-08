import React, { Component } from "react"
import Dropzone from "react-dropzone"
//import 
import {Button} from 'react-bootstrap'
import Api from "../../utils/Api";
// import ReactCrop from 'react-image-crop'
// import 'react-image-crop/dist/ReactCrop.css';

const imageMaxSize = 100000000;
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item)=>{return item.trim()})
class ImageUpload extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
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
        // const myFileReader = new FileReader()
        // myFileReader.addEventListener("load", () => {
        //   console.log ("result",myFileReader.result)
        //   this.setState({
        //     imgSrc: myFileReader.result
        //   });
        //   // calling uploadPic

        // }, false)
        // myFileReader.readAsDataURL (currentFile);
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
    formData.append('myImage',this.state.file);

    Api.uploadPic(formData)
      .then()
      .catch( err => console.log(err));
  }
  render() {
    const {imgSrc} = this.state
    return (
      <>
        <h1>Image Upload</h1>
        {/* {imgSrc !== null ?
        <div> 
          {imgSrc}
        <img src ={imgSrc} alt = ' ' /> 
        </div>: ''} */}

        {/* // <div>
        // <ReactCrop src = {imgSrc} crop ={this.state.crop} onChange={this.handleOnCropChange}/>
        // </div>:''}  */}
        
          <Dropzone
            onDrop={this.handleOnDrop}
            multiple={false}
            accept={acceptedFileTypes}
            maxSize={imageMaxSize}
            minSize={0}
          >
            {({ getRootProps, getInputProps }) => (
             <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  
                    Drag 'n' drop image here, or click to select files
                  
                </div>
                </section>
              
            )}
          </Dropzone>
        
          <Button
            onClick={this.handleFormSubmit}
          >
            Upload
          </Button>
        
      </>
    )
  }
}

export default ImageUpload;
