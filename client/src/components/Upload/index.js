import React from 'react';
// import ImageUploader from 'react-images-upload';
import Dropzone from 'react-dropzone';
import './style.css'

function Upload () {
    const maxSize = 1048576;
    // onDrop = (acceptedFiles) => {
    //     console.log(acceptedFiles);
    //   }
    return (
        
        // we will need to replace the console.log with our own function that reads the file
        <div>
        <h1>Upload Image or Video</h1>
      <form>
        <div class="form-row align-items-center">
          <div class="col-auto my-1">
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Choose Event</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        {/* // we will need to replace the console.log with our own function that
        reads the file */}
        {/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button>
                  Drag 'n' drop some files here, or click to select files
                </button>
              </div>
            </section>
          )}
        </Dropzone> */}
         <div className="text-center mt-5">
      <Dropzone
        onDrop={this.onDrop}
        accept="image/png"
        minSize={0}
        maxSize={maxSize}
      >
        {({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles}) => {
          const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
          return (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {!isDragActive && 'Click here or drop a file to upload!'}
              {isDragActive && !isDragReject && "Drop it like it's hot!"}
              {isDragReject && "File type not accepted, sorry!"}
              {isFileTooLarge && (
                <div className="text-danger mt-2">
                  File is too large.
                </div>
              )}
            </div>
          )}
        }
      </Dropzone>
    </div>
        <button>
          Upload
        </button>
      </form>
    </div>
    );
}
// type="submit" class="btn btn-primary mb-2"

export default Upload;

