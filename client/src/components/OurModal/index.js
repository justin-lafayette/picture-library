import React from "react";

function OurModal(props) {
    const stylez = {fontFamily: "moonsans", fontSize: 30};
    return(
        <div>
            {/* <button onClick={props.openModal}>Open Modal</button> */}

            <h2>Modal Title</h2>

            <button onClick={props.closeModal}>Close Modal</button>

            <div>Modal body</div>

            <form>

                <div className="form-group">
                <label for="sign_name" style={stylez}>Email:</label>
                <input name="username" type="email" id="sign_name" />
                </div>
                
                <div className="form-group">
                <p style={stylez}>Password:</p>
                <input type="password" name="password" id="sign_pass" />
                </div>

                <div className="form-group">
                <div class="login-error"></div>
                <button id="signin" class="btn btn-secondary"
                style={stylez}>Submit</button>
                </div>

            </form>

        </div>
    );
};

export default OurModal;

