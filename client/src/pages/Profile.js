/* TODO: Render events that are subscribed to */
/* TODO: Render all pictures associated with account */
/* TODO: Render personal info */

import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Row, Col, Card, Image, ListGroup, Container } from 'react-bootstrap';
import Api from '../utils/Api';

class Profile extends Component {

    state = {
        auth: true,
        firstName: "",
        lastName: "",
        email: "",
        modalIsOpen: false,
        events: [],
        title: "",
        description: "",
        id: "",
        eventLink: "",
        images:[],
        imagesId: "",
        picture: ""

    }

    // Functions
    
    loadEvents = ()=> {
        Api.getEvents()
            .then(res => {
                this.setState({ events: res.data, title:"", description:"", id:"", eventLink:"" })
            })
            .catch( err => console.log( err ) )
    }

    loadMyPictures =() => {
        Api.getMyPics()
            .then(res => {
                this.setState({images: res.data, imagesId: "", picture: ""})
            })
    }
    
    // Render Elements
    render() {
        return(
            <>
        
                <Navbar
                    
                />

                <Container>

                    <Row>
                        {/* Personal info */}
                        <Col
                            num={"8"}
                        >
                            <Row>
                                <ListGroup>

                                    <ListGroup.Item 
                                        disabled={true}
                                    >
                                        {this.state.firstName}
                                    </ListGroup.Item>

                                    <ListGroup.Item  
                                        disabled={true}
                                        >
                                        {this.state.lastName}
                                    </ListGroup.Item>

                                    <ListGroup.Item  
                                        disabled={true}
                                        >
                                        {this.state.email}
                                    </ListGroup.Item>

                                </ListGroup>

                            </Row>
                        </Col>
                        {/* Subscribed events */}
                        <Col
                            num={"6"}
                        >
                            <Row>

                                {this.state.events.length ? (
                                    <ListGroup>
                                        {this.state.events.map(events => (
                                            <ListGroup.Item 
                                                key={events.id}
                                            >
                                                {events.title}
                                            </ListGroup.Item >
                                        ))}
                                    </ListGroup>
                                ):(
                                    <h3>No Events Available!</h3>
                                )}

                            </Row>
                        </Col>
                    </Row>

                    {/* Pictures */}
                    {this.state.images.length ? (
                        <Row>
                            {this.state.images.map(images => (
                                <Card
                                    key={images.imagesId}
                                >
                                    <Card.Body>
                                        <Image
                                            src={images.picture}
                                        />
                                    </Card.Body>
                                </Card>
                            ))}
                        </Row>
                    ):(
                        <h3>No Pictures Available!</h3>
                    )}

                </Container>

            </>
                            
        );
            
    }
};
    
export default Profile;