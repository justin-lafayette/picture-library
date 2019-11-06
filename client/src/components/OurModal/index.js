import React from "react";
import './style.css'

const signIn = {
    background: 'blue',
    color: 'white'
     
}
export function SignInModal(props) {
    return(
        <div {...props} >
            
            <h2>Sign In!</h2>

            {props.children}

        </div>

    );
}

export function SignUpModal(props) {
    return (

        <div>
            <h2>Sign Up!</h2>
            {/* <h2 style = {signIn}>Sign Up!</h2> */}

            {props.children}

        </div>
        
    );
}

export function UploadPicModal(props) {
    return (

        <div>

            <h2>Upload Pic!</h2>

            {props.children}

        </div>

    );
}
