/* This page will show specific events */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import {Row, Col, Container, Image, Button, /* Card, */ CardGroup, Jumbotron, Modal } from 'react-bootstrap';
import Api from '../utils/Api';
import ImageUpload from '../components/ImageUpload';
// import Slideshow from '../components/Slideshow/slideshow';
// import Api from '../utils/Api';

/* This page used REACT-BOOTSTRAP in-place */
/* Page is rendered within a JSX fragment */


class Event extends Component {

    state = {
        email: "",
        event: [],
        event_id: "",
        title: "",
        description: "",
        memberOf: false,
        eventPics: "",
        slideshow: "",
        auth: true,
        uploadShow: false,
        

    }
    
    
    // Functions
    /* TODO: Function to show event search if sign-in is valid */
    componentDidMount() {
        console.log("Component did mount");
        console.log(this.props.match.params.id);
        this.setState({event_id: this.props.match.params.id})
        
        // ID from the selected event
        console.log("this location: ", this.props.location);

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

        Api.loadSingleEvent(this.props.match.params.id)
            .then( res => {
                // this.props.history.push(`/event/${this.state.event_id}`);
                console.log(res);
            })
            .catch( err => console.log( err ) )

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
        this.setState({
            [name]: value
        });
    }

    // needs back-end route
    handleSubscribe = event => {
        event.preventDefault();
        // this.props.location.reload();

        Api.subscribe({
            email: this.state.email,
            eventID: this.state.eventID,
            subscribe: true
        })
            .then( res => {
                // this.props.location.reload();
            })
    }

    // Needs back-end route
    getSubStatus = () => {

        Api.SubStatus()
            .then( res => {
                this.setState({event: res.data, email: "", event_id: "", title: "", description: "",  memberOf: ""})
            })
    }

    handleUploadShow = () => this.setState({uploadShow: true})

    // Render Elements
    render() {
        console.log(this.state.event_id)
        return(
            <>
                
                {this.state.memberOf ? (
                    <>
                        <Navbar
                            isAuth={this.state.isAuth}
                        >
                            <Container>
                                {this.state.open}
                            </Container>
                            <Button
                                onClick={() => this.handleUploadShow()}
                            >
                                Upload Image
                            </Button>

                            <Modal
                                size="xl"
                                show={this.state.uploadShow}
                                onHide={() =>  this.setState({uploadShow: false})}
                                aria-labelledby="upload-modal"
                                centered
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="upload-modal">

                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ImageUpload />
                                </Modal.Body>
                            </Modal>
                        </Navbar>
                        <div
                            style={{backgroundColor: "red", height: "40vh"}}
                        ></div>

                        <Jumbotron
                            // style={{backgroundColor: "black", height: "92vh"}}
                        >
                            {this.state.event_id}

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
                            isAuth={this.state.isAuth}
                        />
            
                        <Container>

                            <Col>
                            
                                <Row>
                                    <Col 
                                    xs={2}
                                    md={4}
                                    >

                                        <Image 
                                            src={"https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1"}
                                            style={{maxHeight: 200}}
                                        />

                                    </Col>    

                                    <Col>

                                        <Row
                                        style={{height:100}}
                                        >
                                            {this.state.title}
                                        </Row>

                                        <Row
                                        style={{height:100}}
                                        >           
                                            <Button 
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
                                    </Col>
                                </Row>
                            
                            </Col>

                        </Container>
                
                    </>                
                )}
            </>
        )
    }
};

export default Event;

