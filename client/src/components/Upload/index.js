import React from 'react';
// import ImageUploader from 'react-images-upload';
import Dropzone from 'react-dropzone';
import './style.css'

function Upload () {
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
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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
        </Dropzone>
        <button>
          Upload
        </button>
      </form>
    </div>
    );
}
// type="submit" class="btn btn-primary mb-2"

export default Upload;

