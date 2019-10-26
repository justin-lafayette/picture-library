import React from "react";

export function SignInModal(props) {
    return(

        <div>

            {/* <button onClick={props.openModal}>Open Modal</button> */}

            <h2>Modal Title</h2>

            <button onClick={props.closeModal}>Close Modal</button>

            <div>
           
                <form>

                    <div className="form-group">
                        <label htmlFor="sign_name" style={`font-family: moonsans; font-size: 30px;`}>Email:</label>
                        <input name="username" type="email" id="sign_name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="sign_pass" style={`font-family: moonsans; font-size: 30px;`}>Password:</label>
                        <input type="password" name="password" id="sign_pass" />
                    </div>
                    
                    <div className="form-group">
                        <div className="login-error"></div>
                        <button id="signin" className="btn btn-secondary"
                        style={`font-family: moonsans; font-size: 30px;`}>Submit</button>
                    </div>

                </form>

            </div>

        </div>

    );
}

export function SignUpModal(props) {
    return (

        <div>

        </div>
        
    );
}

export function UploadPicModal(props) {
    return (

        <div>

        </div>

    );
}