/* This page is dedicated to creating events. A modal should be added to event search to create events. */

import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Input, InputLabel, FormGroup, FormSubmit, FormTextarea } from '../components/Form';
import { Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import Api from '../utils/Api';


class Home extends Component {

    state = {
        
        auth: true,
        eventTitle: "",
        eventDate: "",
        eventDescription: ""

    }
    
    // Functions
    /* TODO: Function to show event search if sign-in is valid */

    handleFormSubmit = event => {
        event.preventDefault();

        Api.createEvent({
            title: this.state.eventTitle,
            event_date: this.state.eventDate,
            event_description: this.state.eventDescription
        })
            .then( alert("event created") )
            .catch( err => console.log( err ) );
        
    }

    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
    }
    


    // Render Elements
    render() {
        return(
            <div>
        
                {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                <Navbar
                    openModal={(modalToOpen) => this.openModal(modalToOpen)}
                    auth={this.state.auth}
                />

                <Container>

                    <Jumbotron fluid >
                        <form>

                            <FormGroup>
                                <InputLabel 
                                    label="Event Name"
                                />
                                <Input 
                                    value={this.state.eventTitle}
                                    onChange={this.handleInputChange}
                                    name="eventTitle"
                                />
                            </FormGroup>

                            <FormGroup>
                                <InputLabel
                                    label="Event Date"
                                />
                                <Input 
                                    value={this.state.eventDate}
                                    onChange={this.handleInputChange}
                                    name="eventDate"
                                />
                            </FormGroup>

                            <FormGroup>
                                <InputLabel 
                                    label="Event Description"
                                />
                                <FormTextarea 
                                    value={this.state.eventDescription}
                                    onChange={this.handleInputChange}
                                    name="eventDescription"
                                />
                            </FormGroup>

                            <FormSubmit 
                                // disabled={!(this.state.email && this.state.password)}
                                onClick={this.handleFormSubmit}
                            />

                        </form>
                    </Jumbotron>

                </Container>
                
            </div>
                        
        );
    
    }
};

export default Home;