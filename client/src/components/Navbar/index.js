import React from 'react';

function Navbar(props) {
<<<<<<< HEAD
    return(
        
        <nav className="navbar navbar-expand-sm navbar-light bg-light">

            {/* <div className="navbar-brand">LOGO</div> */}
            <img src="capture.png" alt="" />
=======

    if (props.auth) {
>>>>>>> 3fdeef48bd38947646f61a328692b71081631fd6

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
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/eventsearch">Events</a>
                        </li>

<<<<<<< HEAD
                    <li className="nav-item">
                        <button id="sign-in" className="nav-link" onClick={()=>props.openModal(1)}>Sign-In</button>
                    </li>
=======
                        <li className="nav-item">
                            <a className="nav-link" href="/createevent">Create Event</a>
                        </li>
>>>>>>> 3fdeef48bd38947646f61a328692b71081631fd6

                    </ul>

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            {/* Possible profile image? */}
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>

                    </ul>

                </div>

            </nav>
        )
    } else {
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
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/eventsearch">Events</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/createevent">Create Event</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <button id="Sign-in" className="nav-link" onClick={() => props.openModal(1)}>Sign-In</button>
                        </li>

                        <li className="nav-item">
                            <button id="sign-up" className="nav-link" onClick={() => props.openModal(2)}>Sign-Up</button>
                        </li>

                        <li className="nav-item">
                            {/* Possible profile image? */}
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>

                    </ul>

                </div>

            </nav>

        )
    }

};

export default Navbar;