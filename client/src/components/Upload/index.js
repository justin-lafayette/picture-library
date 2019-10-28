import React from 'react';
// import ImageUploader from 'react-images-upload';
import Dropzone from 'react-dropzone';
import './style.css'

function Upload (props) {
    return (
        // we will need to replace the console.log with our own function that reads the file
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}> 
        {({getRootProps, getInputProps}) => (
            <section>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            </section>
        )}
        </Dropzone>
    )
}


export default Upload;