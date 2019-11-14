import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Api from '../utils/Api';
import { withRouter } from 'react-router-dom';
import { Form, Modal, Container, Jumbotron, Button, ButtonToolbar, Alert, Spinner, Col, Row } from 'react-bootstrap';
import Scanner from './Scan';


class Home extends Component {
    
    state = {
        email: this.props.email || "",
        isAuth: this.props.isAuth,
        password: "",
        firstname: "",
        lastname: "",
        signinClose: true,
        signinShow: false,
        signupClose: true,
        signupShow: false,
        badSignin: false,
        badSignup: false,
        loading: false,
        showScanner: false
    }

    showScanner = () => {
        this.setState({showScanner: !this.state.showScanner})
    }

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
                }
            })
    }

    /* TODO: Function to show event search if sign-in is valid */

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({loading: true});
        if( this.state.signinShow ) {
            Api.signIn({
                email: this.state.email,
                password: this.state.password
            })
                .then( () => {
                    Api.isAuth()
                        .then( res => {
                            if( res.data.user ) {
                                this.setState({
                                    email: res.data.user.email,
                                    isAuth: true,
                                    badSignin: false
                                });
                                this.props.history.push('/');
                            } else {
                                this.setState({
                                    password: "",
                                    isAuth: false,
                                    badSignin: true,
                                    loading: false
                                });
                            }
                        })
                })
                .catch( err => console.log(err));
        }

        if( this.state.signupShow ) {
            Api.signUp({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password
            })
                .then( () => {
                    Api.isAuth()
                        .then( res => {
                            if( res.data.user ) {
                                this.setState({
                                    email: res.data.user.email,
                                    isAuth: true,
                                    badSignup: false
                                });
                                this.props.history.push('/');
                            } else {
                                this.setState({
                                    password: "",
                                    isAuth: false,
                                    badSignup: true,
                                    loading: false
                                });
                            }
                        })
                })
                .catch( err => console.log(err));
        }
    }

    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(value)
        this.setState({
            [name]: value
        });
    }

    /* react-bootstrap modal functions */
    handleSigninShow= () => this.setState({signinShow: true});
    handleSignupShow= () => this.setState({signupShow: true});
    


    // Render Elements
    render() {
        if( this.state.isAuth ) {
            return (

                <>
        
                    <Navbar
                        isAuth={this.state.isAuth}
                    >
                         <Button
                            // disabled={!(this.state.QrReader)}
                            onClick={this.showScanner}>
                            QRscan
                        </Button>
                        
                    </Navbar>

                    <Container>
                    
                    <div className="jumbotron" style={{marginTop: 20, borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.75)"}}>
                            <p>What is PixPective?</p>
                            <p>PixPective allows you to join an event via a QR Code or via the “Join an Event” button on the app.
                            Once you have joined an event, you will upload any photos from that event into the library. Once in the library, they will be added to a slideshow of the event that will show multiple viewpoints, 
                            including yours and any person from the same event you attended.
                            Wherever multiple people are experiencing the same trip, concert, event or happening, this app is for you!</p>
                            <p>Is it secure?  Yes! The ability to add, remove, print, etc. images from this library is reserved for the owner of the images and the site Administrator. You will always be the only one (other than the Administrator) that can remove your photos.</p>
                           
                    </div>
                    </Container> 
                    {this.state.showScanner? <Scanner/>: <></>}
                    
                </>
            )
        } else {
            
            return(
                <>
                    <Navbar
                        isAuth={this.state.isAuth}
                    >
                        <ButtonToolbar>
                            <Col>
                                <Button
                                    onClick={() => this.handleSigninShow()}
                                >
                                    SignIn
                                </Button>
                            </Col>

                            <Col
                                sm={5.5}
                            >
                                <Button
                                    onClick={() => this.handleSignupShow()}
                                >
                                    SignUp
                                </Button>
                            </Col>
                            <Modal
                                size="md"
                                show={this.state.signinShow}
                                onHide={() => this.setState({signinShow: false})}
                                aria-labelledby="signin-modal"
                            >
                                <Modal.Header closeButton>

                                    <Modal.Title id="signin-modal">
                                        Sign-In
                                    </Modal.Title>

                                </Modal.Header>
                                <Modal.Body>

                                    <Form>
                                        {this.state.badSignin ? (
                                            
                                            <Alert variant={"danger"}>
                                                Wrong Username or Password
                                            </Alert>

                                            ): (<></>)}

                                        <Form.Group>

                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                type="email"
                                                name="email" 
                                                placeholder="Email"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                name="password" 
                                                placeholder="Password"
                                            />
                                        </Form.Group>

                                        {this.state.loading ? (

                                            <Button variant="primary" disabled>
                                                <Spinner
                                                    as="span"
                                                    animation="grow"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                Loading...
                                            </Button>

                                        ):(

                                            <Button
                                            disabled={!(this.state.email && this.state.password)}
                                            onClick={this.handleFormSubmit}
                                            >
                                                Submit
                                            </Button>

                                        )}

                                    </Form>

                                </Modal.Body>
                            </Modal>
                            
                            {/* Sign-Up Modal */}
                            <Modal
                                size="md"
                                show={this.state.signupShow}
                                onHide={() => this.setState({signupShow: false})}
                                aria-labelledby="signup-modal"
                            >
                                <Modal.Header closeButton>

                                    <Modal.Title id="signup-modal">
                                        Sign-Up
                                    </Modal.Title>

                                </Modal.Header>

                                <Modal.Body>

                                    <Form>
                                        {this.state.badSignup ? (
                                            <Alert variant={"danger"}>
                                                User already exists!
                                            </Alert>
                                        ):(<></>)}
                                        <Form.Group>

                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                value={this.state.firstname}
                                                onChange={this.handleInputChange}
                                                name="firstname"
                                                type="text"
                                                placeholder="First Name"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                value={this.state.lastname}
                                                onChange={this.handleInputChange}
                                                name="lastname"
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                name="password"
                                                placeholder="Password"
                                            />
                                        </Form.Group>

                                        {this.state.loading ? (

                                            <Button variant="primary" disabled>
                                                <Spinner
                                                    as="span"
                                                    animation="grow"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                Loading...
                                            </Button>

                                        ):(

                                            <Button
                                                disabled={!(this.state.email && this.state.password && this.state.firstname && this.state.lastname)}
                                                onClick={this.handleFormSubmit}
                                            >
                                                Submit
                                            </Button>

                                        )}

                                    </Form>

                                </Modal.Body>
                            </Modal>
                        </ButtonToolbar>
                    </Navbar>
                    
                    <Row>
                        <Col
                            md={5}
                            className="text-center"
                        >
                        <div className="jumbotron" style={{borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.75)"}}>

                            <p>Welcome to PixPective!</p> 
                            <p>Where memories are shared.</p>
                            <p>Just scan, join and </p>
                            <p>Take your memories to the next level. </p> 
                            <p>Gain a more comprehensive view of your event and share them!</p>
                        </div>

                        </Col>
                    </Row>
                       
                </>
                            
            );
        
        }
        
    }
};

export default withRouter( Home );