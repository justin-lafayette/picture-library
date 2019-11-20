import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Api from '../utils/Api';
import { withRouter } from 'react-router-dom';
import { Form, Modal, Container, Button, ButtonToolbar, Alert, Spinner, Col, Row } from 'react-bootstrap';
import Scanner from './Scan';


class Contact extends Component {
    
    state = {}
    // Render Elements
    render() {
        if( this.state.isAuth ) {
            return (

                <>
        
                    <Navbar
                        isAuth={this.state.isAuth}
                    >
                         {/* <Button
                            // disabled={!(this.state.QrReader)}
                            onClick={this.showScanner}>
                            QRscan
                        </Button> */}
                        
                    </Navbar>

                    <Container>
                    
                    <div className="jumbotron" style={{marginTop: 20, borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.75)"}}>
                            
                            <h2>Meet the Team:</h2>
                            <p></p>
                            <h3>Abby Maldonado</h3>
                            <p></p>
                            <h3>Aparna Sakhalkar</h3>
                            <p></p>
                            <h3>Justin Barfield</h3>
                            <p></p>
                            <h3>Tina Azad</h3>
                            <p></p>
                            <h3>Michael Adams</h3>
                            <p></p>
                            <p></p>
                            <p></p>
                            <h2>Email us at:</h2>
                            <p></p>
                            <h3>PixPective.Support@GMail.Com</h3>
                                                       
                    </div>
                    </Container> 
                    
                </>
            )
        } 
    }
}
export default Contact;