import React from "react";

export function SignInModal(props) {
    const stylez = {fontFamily: "moonsans", fontSize: 30};
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
                        <label htmlFor="sign_name" style={stylez}>Email:</label>
                        <input name="username" type="email" id="sign_name" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="sign_pass" style={stylez}>Password:</label>
                        <input type="password" name="password" id="sign_pass" />
                    </div>

                    <div className="form-group">
                        <div class="login-error"></div>
                        <button id="signin" class="btn btn-secondary" style={stylez}>Submit</button>
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
