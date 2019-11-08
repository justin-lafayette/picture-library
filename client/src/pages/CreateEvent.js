/* This page is dedicated to creating events. A modal should be added to event search to create events. */

import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Api from '../utils/Api';
import { Container, Jumbotron, Form, Button } from 'react-bootstrap';
import QRCode from 'react-qr-svg'; 


class CreateEvent extends Component {

    state = {
        
        auth: true,
        email: "",
        eventTitle: "",
        eventDate: "",
        eventDescription: "",
        qrCodeValue: ""
    }
    
    // Functions
    /* TODO: Function to show event search if sign-in is valid */

    handleFormSubmit = event => {
        event.preventDefault();
        // console.log('in app.js b4 Api.createevent');
        Api.createEvent({
            title: this.state.eventTitle,
            event_date: this.state.eventDate,
            event_description: this.state.eventDescription,
            email: this.state.email
        })
            .then( res => {
                alert("success");
                //res.data is going to contain the event that we just created
                //setState of qrCodeValue to that will cause a re-render
                //in our render() method, we need to conditionally render either....
                //a) QrCode component, supplying it the value of this.state.qrCodeValue, or
                //b) the form that it is already rendering
                //..BASED on whether or not this.state.qrCodeValue has a value. See comments in render() for more info
            })
            .catch( err => console.log( err ) );
        
    }

    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        // ToDo needs to be changed to email from auth.
        this.state.email = 'codybear40@gmail.com';
    }
    


    // Render Elements
    render() {
        return(
            <div>
        
                {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                <Navbar
                    auth={this.state.auth}
                />

                <Container>
                    
                    <Jumbotron>
                        {/* if this.state.qrCode has a value */}
                        {/* render <QrCode value={this.state.qrCodeValue} */}
                        {/* else, render the form below. NOTE: this form needs to be put into its own component so that it can be rendered conditionally (in one line)  */}
                        { this.state.qrCode ? <QRCode value={this.state.qrCodeValue}/> : ( 

                            <Form>

                            <Form.Group controlId="event-name">
                                <Form.Label 
                                    label="Event Name"
                                    >
                                    Event Name
                                </Form.Label>
                                <Form.Control 
                                    value={this.state.eventTitle}
                                    onChange={this.handleInputChange}
                                    name="eventTitle"
                                    />
                            </Form.Group>

                            <Form.Group controlId="event-date">
                                <Form.Label
                                    label="Event Date"
                                    >
                                    Event Date
                                </Form.Label>
                                <Form.Control 
                                    value={this.state.eventDate}
                                    onChange={this.handleInputChange}
                                    name="eventDate"
                                    />
                            </Form.Group>

                            <Form.Group controlId="event-description">
                                <Form.Label 
                                    label="Event Description"
                                    >
                                    Event Description
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3" 
                                    value={this.state.eventDescription}
                                    onChange={this.handleInputChange}
                                    name="eventDescription"
                                    />
                            </Form.Group>

                            <Button 
                                // disabled={!(this.state.email && this.state.password)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit
                            </Button>

                        </Form>
                    )}
                    </Jumbotron>

                </Container>
                
            </div>
                        
        );
    
    }
};

export default CreateEvent;