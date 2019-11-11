/* This page will show specific events */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import {Row, Col, Container, Image, Button, /* Card, */ CardGroup, Jumbotron} from 'react-bootstrap';
import Api from '../utils/Api';
import Slideshow from '../components/Slideshow/slideshow';
// import Api from '../utils/Api';

/* This page used REACT-BOOTSTRAP in-place */
/* Page is rendered within a JSX fragment */


class Event extends Component {

    state = {
        email: "",
        event: [],
        eventID: "",
        title: "title",
        description: "",
        eventPlaceholder: "",
        memberOf: true,
        eventPics: "",
        slideshow: "",
        auth: true

    }
    
    
    // Functions
    /* TODO: Function to show event search if sign-in is valid */
    componentDidMount() {
        console.log("Component did mount");
        // ID from the selected event
        console.log(this.props.location);

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
              console.log("email", this.state.email);
            }
        })

        // this is not kicking off
        // Api.loadSingleEvent(this.props.location)
        //     .then( res => {
        //         console.log(res)
        //     })
        //     .catch(err => console.log( err ))
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

    handleSubscribe = event => {
        event.preventDefault();

        Api.subscribe({
            email: this.state.email,
            eventID: this.state.eventID,
            subscribe: true
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
            <>
                
                {this.state.memberOf ? (
                    <>
                        <Navbar
                            openModal={(modalToOpen) => this.openModal(modalToOpen)}
                            auth

                        >
                            <Container>
                                {this.state.open}
                            </Container>
                            <Button>Upload Image</Button>
                        </Navbar>
                        <div
                            style={{backgroundColor: "red", height: "40vh"}}
                        ></div>

                        <Jumbotron
                            style={{backgroundColor: "black", height: "92vh"}}
                        >
                        </Jumbotron>
                        <Container>

                            <Row>
                                <Col>
                                    <p>Description
                                        {this.state.description}
                                    </p>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div>Slideshow
                                        {this.state.slideshow}
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <CardGroup>
                                        {/* {this.state.event.map( (event) => {

                                            <Card
                                            key={event.eventID}
                                            >
                                                <Card.Img>
                                                    {event.eventPics}
                                                </Card.Img>
                                            </Card>
                                         }
                                        })*/}
                                    </CardGroup>
                                </Col>
                            </Row>

                        </Container>
                    </>

                ):(

                    <>
                        <Navbar
                            openModal={(modalToOpen) => this.openModal(modalToOpen)}
                            />
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
                                            <Button 
                                            /* TODO: sign-up if not member */
                                            onClick={this.handleSubscribe}
                                            >Subscribe</Button>
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
                
                    </>                
                )}
           </>
      )}
};

export default Event;

