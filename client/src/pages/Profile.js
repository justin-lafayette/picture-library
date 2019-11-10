/* TODO: Render events that are subscribed to */
/* TODO: Render all pictures associated with account */
/* TODO: Render personal info */

import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Row, Col, Card, Image, ListGroup, Container, Jumbotron } from 'react-bootstrap';
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
        event_description: "",
        event_id: "",
        images:[],
        imagesId: "",
        picture: ""

    }

    // Functions
    
    getEvents = ()=> {
        Api.getEvents(this.state.email)
            .then(res => {
                console.log('in loadEvents email ', this.state.email);
                this.setState({ events: res.data, title:"", event_description:"", event_id:"" });
            })
            .catch( err => console.log( err ) )
    }

    loadMyPictures =() => {
        Api.getMyPics()
            .then(res => {
                // console.log("mypics", res)
                this.setState({images: res.data, imagesId: "", picture: ""})
            })
    }

    componentDidMount() {
        console.log("Component did mount");
        this.getEvents();
        // this.loadMyPictures();
        

        Api.isAuth()
          .then( res => {
              console.log("auth res: ", res)
            if( res.data.user ) {
              this.setState({
                firstName: res.data.user.firstname,
                lastName: res.data.user.lastname,
                email: res.data.user.email,
                isAuth: true
              });
              console.log("if")
              console.log("email: ", this.state.email);
              console.log("first name: ", this.state.firstName);
              console.log("last name: ", this.state.lastName);
            } else {
              this.setState({
                email: "",
                isAuth: false
              })
              this.props.history.push('/login');
            }
        })
        console.log("email: ", this.state.email);
        console.log("first name: ", this.state.firstName);
        console.log("last name: ", this.state.lastName);
    }
    
    // Render Elements
    render() {
        return(
            <>
        
                <Navbar
                    isAuth={this.state.isAuth}
                />

                <Jumbotron fluid>

                    <Container className={"bg-success"}>

                        <Row>
                            {/* Personal info */}
                            <Col
                                num={"8"}
                            >
                                <Row className={"text-center"}>
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
                                className={"text-center"}
                            >
                                <Row 
                                    // style={{width:"100rem"}}
                                >

                                    {this.state.events.length ? (
                                        <ListGroup
                                            
                                        >
                                            {this.state.events.map(events => (
                                                <ListGroup.Item 
                                                    key={events.event_id}
                                                    
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
                        {/* {this.state.images.length ? (
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
                        )} */}

                    </Container>
                </Jumbotron>

            </>
                            
        );
            
    }
};
    
export default Profile;