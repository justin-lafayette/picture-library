import React from 'react';
import { Navbar, Image, Nav } from 'react-bootstrap';
import "./style.css";

function SiteNavbar(props) {
    return(
        <Navbar collapseOnSelect variant="custom-background" expand="lg">

            <Navbar.Brand href="/">
                <Image
                    alt="Pixpective"
                    src={require('../../assets/pixpectivetoo.png')}
                    width="150"
                    height="50"
                    padding="0"
                    margin="0"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="site-navbar" />
            <Navbar.Collapse id="site-navbar">
                <Nav className="mr-auto">
                    {props.isAuth ? (
                        <>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/eventsearch">Events</Nav.Link>
                            <Nav.Link href="/createevent">Create Event</Nav.Link>
                        </>
                    ):(null)}
                </Nav>
                <>
                    {props.isAuth ? (
                        <Nav.Link eventKey={2}>Profile</Nav.Link>
                    ):(
                        // On collapse needs to be positioned better. Possibly centered and/or wider
                        <div eventKey={2}>
                            {props.children}
                        </div>
                    )}
                </>
            </Navbar.Collapse>


        </Navbar>
    )
};

export default SiteNavbar;