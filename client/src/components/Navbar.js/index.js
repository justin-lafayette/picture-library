import React from 'react';

function Navbar(props) {
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="navbar-brand">LOGO</div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                        {/* add state to change the "current" per page */}
                        <div className="nav-link">Home <span className="sr-only">(current)</span></div>
                    </li>

                    <li className="nav-item">
                        <div className="nav-link">Gallery</div>
                    </li>

                    <li className="nav-item">
                        <div className="nav-link">Events</div>
                    </li>

                </ul>

                <ul className="navbar-nav">

                    <li className="nav-item">
                        <button id="Sign-in" className="nav-link" onClick={props.openModal}>Sign-In</button>
                    </li>

                    <li className="nav-item">
                        <button id="sign-up" className="nav-link">Sign-Up</button>
                    </li>

                    <li className="nav-item">
                        {/* Possible profile image? */}
                        <div className="nav-link">Profile</div>
                    </li>

                </ul>

            </div>

        </nav>

    );
};

export default Navbar;