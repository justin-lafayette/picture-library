import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Col, Container, Row } from '../components/Grid';
import { Card, Button, Dropdown, Image } from 'react-bootstrap';
// import Jumbotron from '../components/Jumbotron';
import Api from '../utils/Api';


class EventSearch extends Component {

    state = {
        modalIsOpen: false,
        signInModal: false,
        signUpModal: false,
        events: [],
        title: "",
        description: "",
        id: ""

    }
    
    // Functions
    /* Switch case added to take in the value from the navbar component and set the state to the proper Modal to be displayed. */
    openModal = (modalToOpen) => {
        switch (modalToOpen) {
        
            default:
                break;
        }
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.

    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    /* TODO: Function to show event search if sign-in is valid */

    handleFormSubmit = event => {
        event.preventDefault();
        /* TODO: handle form submit for searching events */
    }

    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        /* TODO: remove consol log */
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
    }
    
    loadEvents = ()=> {
        Api.getEvents()
            .then(res => {
                this.setState({ events: res.data, title:"", description:"", id:"", eventLink:"" })
            })
            .catch( err => console.log( err ) )
    }

    componentDidMount() {
        this.loadEvents();
    }

    goToEvent = () => {
        Api.loadSingleEvent()
            .then( res => {

            })
            .catch( err => console.log( err ) )
    }


    // Render Elements
    render() {
        return(
            <div>
        
                {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                {/* TODO: option needed to verify if sign-in is valid. if so do not render the sign-in/sign-up buttons */}
                <Navbar
                    openModal={(modalToOpen) => this.openModal(modalToOpen)}
                />

                <Container>

                    <Col
                    num={"12"}
                    >
                        <Row>
                            <Col
                            num="10"
                            >
                                {/* TODO: convert to custom dropdown component like in docs online */}
                                <Dropdown>

                                    <Dropdown.Toggle 
                                    variant="success"
                                    id="events-dropdown"
                                    >
                                        Search Events!
                                    </Dropdown.Toggle>

                                    {this.state.events.length ? (
                                        
                                        <Dropdown.Menu>
                                            {this.state.events.map(events => (
                                                <Dropdown.Item
                                                key={events.id}
                                                /* TODO: onClick() */
                                                >
                                                    {events.title}
                                                </Dropdown.Item>
                                                ))}
                                        </Dropdown.Menu>

                                    ) : (

                                        <Dropdown.Menu>
                                            <Dropdown.Item>No Events Available</Dropdown.Item>
                                        </Dropdown.Menu>

                                    )}
                                    
                                </Dropdown>

                            </Col>
                        </Row>
                    {this.state.events.length ? (
                        
                        <Row
                        center
                        >
                            <Col
                            num={"10"}
                            >
                                {this.state.events.map(events => (

                                    <Row key={events._id}>
                                        <Card>
                                            <Card.Body>

                                                <Col
                                                num={"4"}
                                                >
                                                    <Image 
                                                    /* TODO: href={{events.eventLink}} */
                                                    />
                                                </Col>

                                                <Col
                                                num={"8"}
                                                >
                                                    <Row>
                                                        <Card.Title>{events.title}</Card.Title>
                                                    </Row>
                                                    <Row>
                                                        <Card.Text>{events.description}</Card.Text>
                                                        <Button
                                                        /* TODO: href={{events.eventLink}} */
                                                        >
                                                            See More
                                                        </Button>
                                                    </Row>
                                                </Col>

                                            </Card.Body>
                                        </Card>
                                    </Row>

                                ))}
                            </Col>

                        </Row>

                    ) : (<h3>No events to display!</h3>)}
                    
                    </Col>
                    
                </Container>
                
            </div>
                        
        );
        
    }
};

export default EventSearch;