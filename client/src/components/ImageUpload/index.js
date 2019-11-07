import React, { Component } from "react";
import Dropzone from "react-dropzone";
// import {Button} from 'react-bootstrap'

const imageMaxSize = 100000000;
const acceptedFiileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFiileTypesArray = acceptedFiileTypes.split(",").map((item)=>{return item.trim()})
class ImageUpload extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgSrc: null
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
      if (!acceptedFiileTypesArray.includes(currentFileType)){
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
  render() {
    const {imgSrc} = this.state
    return (
      <div>
        <h1>Image Upload</h1>
        {imgSrc !== null ?
        <div> 
          {imgSrc}
        <img src ={imgSrc} alt = 'Preview of Uploaded image' /> 
        </div> : ''}
        <form>
          {/* <div class="form-row align-items-center">
       <div class="col-auto my-1">
         <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
         <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
           <option selected>Choose Event</option>
           <option value="1">One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
         </select>
       </div>
       </div> */}
          {/* // we will need to replace the console.log with our own function that reads the file */}
          <Dropzone
            onDrop={this.handleOnDrop}
            multiple={false}
            accept={acceptedFiileTypes}
            maxSize={imageMaxSize}
            minSize={0}
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <button>
                    Drag 'n' drop image here, or click to select files
                  </button>
                </div>
              </section>
            )}
          </Dropzone>
          {/* <button type="submit" className="btn btn-primary mb-2">
            Upload
          </button> */}
        </form>
      </div>
    );
  }
}

export default ImageUpload;
