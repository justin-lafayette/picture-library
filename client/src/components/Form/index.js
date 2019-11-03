import React from 'react';

// Components for forms here. Call the function name in the page for a cleaner look.

export function Input(props) {
    return (

        <input className="form-control" {...props} />

    );
}

export function InputLabel(props) {
    return (

        <label {...props}>{props.label}</label>

    );

}

export function FormGroup(props) {
    return (

        <div className="form-group" {...props} >

        </div>

    );
}

export function FormSubmit(props) {
    return(

        <button {...props} id={props.id}>Submit</button>

    );
}

export function ImageUploadButton(props) {
    return(

        <div class="form-group">
            <label htmlFor={props.id}>{props.labelName}</label>
            <input type="file" class="form-control-file" id={props.id} />
        </div>

    );
}

// js below needed for drag & drop functionality. To be placed in page container as function and passed as prop?

// $('.file-upload').file_upload();
// export function ImageUploadDrop(props) {

//     <div class="file-upload-wrapper">
//         <input type="file" id={props.id} class="file-upload" />
//     </div>
// }