import React from 'react';

function Navbar(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="navbar-brand" href="/">
                {/* TODO: remove hard codded require for img */}
                <img
                    alt=""
                    src={require('../../assets/pixpectivetoo.png')}
                    width="150"
                    height="50"
                    padding="0"
                    margin="0"
                    className="d-inline-block align-top"
                /> 
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                        {/* TODO: add state to change the "current" per page */}
                        <div className="nav-link" href="/">Home <span className="sr-only">(current)</span></div>
                    </li>

                    <li className="nav-item">
                        <div className="nav-link" href="/eventsearch">Events</div>
                    </li>

                    <li className="nav-item">
                        <div className="nav-link" href="/createevent">Create Event</div>
                    </li>

                </ul>

                <ul className="navbar-nav">

                    <li className="nav-item">
                        <button id="Sign-in" className="nav-link" onClick={() => props.openModal(1)}>Sign-In</button>
                    </li>

                    <li className="nav-item">
                        <button id="sign-up" className="nav-link" onClick={() => props.openModal(2)}>Sign-Up</button>
                    </li>

                    {/* <li className="nav-item">
                        <button id="sign-up" className="nav-link" onClick={()=>props.openModal(3)}>Sign-Up</button>
                    </li> */}

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