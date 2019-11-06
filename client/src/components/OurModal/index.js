import React from "react";
import './style.css'

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

// export function CreateEventModal(props) {
//     return (

//         <div>

//             <h2>Create Event</h2>

//             {props.children}

//         </div>

//     )
// }

export function UploadPicModal(props) {
    return (

        <div>

            <h2>Upload Pic!</h2>

            {props.children}

        </div>

    );
}
