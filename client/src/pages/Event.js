/* This page will show specific events */
/* TODO: create a landing page for non-authenticated users */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
// import { Input, InputLabel, FormGroup, FormSubmit } from '../components/Form';
// import { Col, Row, Container } from '../components/Grid';
import {Row, Col, Container, Image, Button} from 'react-bootstrap';
import Api from '../utils/Api';
// import Api from '../utils/Api';


class Event extends Component {

    state = {
        email: "",
        event: [],
        eventID: "",
        title: "",
        description: "",
        eventPlaceholder: "",
        memberOf: "",
        eventPics: ""

    }
    
    // Functions
    /* TODO: Function to show event search if sign-in is valid */

    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    handleSubscribe = event => {
        event.preventDefault();

        Api.subscribe({
            email: this.state.email,
            eventID: this.state.eventID,
            subscribe: "true"
        })
    }

    getSubStatus = () => {

        Api.SubStatus()
            .then( res => {
                this.setState({event: res.data, email: "", eventID: "", title: "", description: "", eventPlaceholder: "", memberOf: ""})
            })
    }
    


    // Render Elements
    render() {
        return(
            <div>
        
                {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                <Navbar
                    openModal={(modalToOpen) => this.openModal(modalToOpen)}
                />
                
                {/* TODO: change layout so the page will render completely different if signup if memberOf is true */}
                <Container>

                    <Col>
                    
                        <Row>
                            <Col 
                            xs={2}
                            md={4}
                            >

                                <Image 
                                /* TODO: {this.state.eventPlaceholder} */
                                src={"https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1"}
                                style={{maxHeight: 200}}
                                />

                            </Col>

                            <Col>

                                <Row
                                style={{height:100}}
                                >
                                    {this.state.title}
                                    Title
                                
                                </Row>

                                <Row
                                style={{height:100}}
                                >
                                    {this.state.memberOf ? (

                                        /* TODO: show qr code if member of the event */
                                        <Button 
                                        /* onClick(this.modalToOpen) */
                                        >QR</Button>

                                        ) : (
                                            
                                        /* TODO: sign-up if not member */
                                        <Button 
                                        onClick={this.handleSubscribe}
                                        >Subscribe</Button>

                                    )}
                                </Row>

                            </Col>
                        </Row>

                        <Row>
                            <Col
                            style={{height:100}}
                            >
                                {this.state.description}
                                Description
                                
                            </Col>
                        </Row>
                    
                    </Col>

                </Container>
                
                
            </div>
                        
        );
        
    }
};

export default Event;