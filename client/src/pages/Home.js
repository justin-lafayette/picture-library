import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Api from '../utils/Api';
import { withRouter } from 'react-router-dom';
import { Form, Modal, Container, Jumbotron, Button, ButtonToolbar, Alert, Spinner } from 'react-bootstrap';
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
                // this.props.history.push('/');    
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
                        
                        <Jumbotron>
                            <p>Welcome to PixPective!  Where memories are shared.</p>
                            <p> </p>
                            <p>What is PixPective?  It is a place to augment your experiences with those that shared the same event.</p>
                            <p> </p>
                            <p>How does it work?  Glad you asked!  PixPective allows you to join an event via a QR Code or via the “Join an Event” button on the app.
                            Once you have joined an event, you will upload any photos you want from that event into the library.  There it will join any other pictures uploaded from that event.   Once in the library, they will be added to a slideshow of the event that will show multiple viewpoints, including yours.   This gives a much more comprehensive impression of the event in question.
                            What events qualify for this?  If you attend an event where over one person is taking pictures, the event qualifies.  Concert? Yes.  Baby's first birthday party? Yes.  Baseball or soccer game?  Yes!
                            Wherever multiple people are experiencing the same trip, concert, event or happening, this app is for you!</p>
                            <p> </p>
                            <p>Is it secure?  Yes!  The ability to add, remove, print, etc. images from this library is reserved for the owner of the images and the site Administrator.  You must register for and be admitted to the event as a qualified user.   You will always be the only one (other than the Administrator) that can remove your photos.</p>
                            <p> </p>
                            <p>So...Take your memories to the next level.  Add them to PixPective! and gain a more comprehensive view of your events than has ever been available until now.</p>
                        </Jumbotron>

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

                            <Button
                                onClick={() => this.handleSigninShow()}
                            >
                                Sign-In
                            </Button>

                            <Button
                                onClick={() => this.handleSignupShow()}
                            >
                                Sign-Up
                            </Button>

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
                    
                    

                    <Container>

                        <Jumbotron>
                            <p>Welcome to PixPective!  Where memories are shared.</p>
                            <p> </p>
                            <p>What is PixPective?  It is a place to augment your experiences with those that shared the same event.</p>
                            <p> </p>
                            <p>How does it work?  Glad you asked!  PixPective allows you to join an event via a QR Code or via the “Join an Event” button on the app.
                            Once you have joined an event, you will upload any photos you want from that event into the library.  There it will join any other pictures uploaded from that event.   Once in the library, they will be added to a slideshow of the event that will show multiple viewpoints, including yours.   This gives a much more comprehensive impression of the event in question.
                            What events qualify for this?  If you attend an event where over one person is taking pictures, the event qualifies.  Concert? Yes.  Baby's first birthday party? Yes.  Baseball or soccer game?  Yes!
                            Wherever multiple people are experiencing the same trip, concert, event or happening, this app is for you!</p>
                            <p> </p>
                            <p>Is it secure?  Yes!  The ability to add, remove, print, etc. images from this library is reserved for the owner of the images and the site Administrator.  You must register for and be admitted to the event as a qualified user.   You will always be the only one (other than the Administrator) that can remove your photos.</p>
                            <p> </p>
                            <p>So...Take your memories to the next level.  Add them to PixPective! and gain a more comprehensive view of your events than has ever been available until now.</p>
                        </Jumbotron>

                    </Container>
                    
                    
                       
                </>
                            
            );
        
        }
        
    }
};

export default withRouter( Home );