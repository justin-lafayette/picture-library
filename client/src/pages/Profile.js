/* TODO: Render events that are subscribed to */
/* TODO: Render all pictures associated with account */
/* TODO: Render personal info */

import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Container } from '../components/Grid';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { Input } from '../components/Form';
import { List, ListItem } from '../components/List';
import Api from '../utils/Api';



class Profile extends Component {

    state = {
        auth: true,
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
            <div>
        
                <Navbar
                    openModal={this.openModal}
                />

                <Container>

                    <Row>
                        {/* Personal info */}
                        <Col
                            num={"8"}
                        >
                            <Row>
                                <form>
                                    <Input 
                                        disabled={true}
                                    />
                                    <Input 
                                        disabled={true}
                                    />
                                    <Input 
                                        disabled={true}
                                    />
                                </form>

                            </Row>
                        </Col>
                        {/* Subscribed events */}
                        <Col
                            num={"6"}
                        >
                            <Row>

                                {this.state.events.length ? (
                                    <List>
                                        {this.state.events.map(events => (
                                            <ListItem
                                                key={events.id}
                                            >
                                                {events.title}
                                            </ListItem>
                                        ))}
                                    </List>
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

            </div>
                            
        );
            
    }
};
    
export default Profile;