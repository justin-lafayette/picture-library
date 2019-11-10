/* This page is dedicated to creating events. A modal should be added to event search to create events. */

import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Api from '../utils/Api';
import { Container, Jumbotron, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
// import BtstrpDatePicker from '../components/BtstrpDatePicker';
// import DatePicker from 'react-bootstrap-date-picker';
// import createReactClass from 'create-react-class';
// import QRCode from 'react-qr-svg';


class CreateEvent extends Component {

    state = {

        isAuth: true,
        email: "",
        eventTitle: "",
        eventDate: "",
        eventDescription: "",
        qrCodeValue: "",
        date: new Date()

    }

    // Functions
    /* TODO: Function to show event search if sign-in is valid */

    handleFormSubmit = event => {
        event.preventDefault();
        // console.log('in app.js b4 Api.createevent');
        Api.createEvent({
            title: this.state.eventTitle,
            event_date: this.state.date,
            event_description: this.state.eventDescription,
            email: this.state.email
        })
            .then(res => {
                console.log(res.data)
                alert("success");
                //res.data is going to contain the event that we just created
                //setState of qrCodeValue to res.data._id, will cause a re-render
                this.setState({qrCodeValue: res.data.event_id }) 
            })
            .catch(err => console.log(err));

    }

    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
        
    }

    onChange = date => this.setState({ date });

    
    componentDidMount() {
        Api.isAuth()
          .then( res => {
            if( res.data.user ) {
              this.setState({
                email: res.data.user.email,
                isAuth: true
              });
            } else {
              this.setState({
                email: "",
                isAuth: false
              })
              this.props.history.push('/login');
            }
            console.log("isAuth", this.state.isAuth);
            console.log("email", this.state.email);
        })

        // setDate = () => {
            // let newDate = new Date().toISOString();
            // this.setState({date: newDate});
        // }
    }

    // componentDidUpdate() {
    //     let hiddenInputElement = document.getElementById("example-datepicker");
    //     console.log(hiddenInputElement.value);
    //     console.log(hiddenInputElement.getAttribute('date-formattedvalue'));
    // }


    // Render Elements
    render() {
        return (
            <div>

                {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                <Navbar
                    isAuth={this.state.isAuth}
                />

                <Container>

                    <Jumbotron>
                        {/* if this.state.qrCode has a value */}
                        {/* render <QrCode value={this.state.qrCodeValue} */}
                        {/* else, render the form below. NOTE: this form needs to be put into its own component so that it can be rendered conditionally (in one line)  */}
                        {this.state.qrCodeValue ? <div><img src={"http://api.qrserver.com/v1/create-qr-code/?data=" +this.state.qrCodeValue}></img></div> : (

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

                                {/* <Form.Group controlId="event-date">
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
                                </Form.Group> */}

                                <Form.Group>
                                    <Form.Label>
                                        Date
                                    </Form.Label>
                                    <DatePicker 
                                        value={this.state.date}
                                        onChange={this.onChange}
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