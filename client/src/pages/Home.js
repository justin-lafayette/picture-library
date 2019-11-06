import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Api from '../utils/Api';
// import { withRouter } from 'react-router-dom';
import { Form, Modal, Container, Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';


class Home extends Component {

    state = {
        modalIsOpen: false,
        signInModal: false,
        signUpModal: false,
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        auth: false,
        signinClose: true,
        signinShow: false,
        signupClose: true,
        signupShow: false,

    }
    
    // Functions
    /* TODO: Console log does not appear in browser or console */
    componentDidMount() {
        console.log("component did mount")
        Api.isAuth('/auth/isauth')
          .then( res => {
              console.log("res.body", res.body)
            if( res.data.user ) {
                console.log("Set State true")
                this.setState({
                    email: this.data.user.email,
                    auth: true
                });
            } else {
                console.log("Set State false")
                this.setState({
                    email: null,
                    auth: false
                })
                this.props.history.push('/')
            }
        });
    }

    /* Switch case added to take in the value from the navbar component and set the state to the proper Modal to be displayed. */
    openModal = (modalToOpen) => {
        switch (modalToOpen) {
            case 1:
                this.setState({ signInModal : true, signUpModal: false, modalIsOpen: true });
                break;

            case 2:
                this.setState({ signUpModal : true, signInModal: false, modalIsOpen: true });
                break;

            case 3:
                this.setState({ createEvent : true, modalIsOpen: true });
                break;
        
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
        if( this.state.signinShow ) {
            Api.signIn({
                email: this.state.email,
                password: this.state.password
            })
                .then( res => {
                    this.props.history("/")
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
                .then( res => {
                    this.setState({modalIsOpen: false, signUpModal: false})
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
    // handleClose = () => this.setState({setShow: false});
    handleSigninShow= () => this.setState({signinShow: true});
    handleSignupShow= () => this.setState({signupShow: true});
    


    // Render Elements
    render() {
        if( this.state.auth ) {
            return (

                <div>
        
                    {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                    <Navbar
                        openModal={(modalToOpen) => this.openModal(modalToOpen)}
                        auth={this.state.auth}
                    />

                    <Container>
                        
                        <Jumbotron fluid >
                            <p>App description to go here.</p>
                        </Jumbotron>

                    </Container>
                    
                </div>

            )
        } else {
            
            return(
                <>
            
                    {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                    <Navbar
                        openModal={(modalToOpen) => this.openModal(modalToOpen)}
                        auth={this.state.auth}
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

                                        <Form.Group>
                                            <Form.Label
                                                htmlFor="" /* TODO: ID needed for input */
                                                label="Username"
                                            ></Form.Label>
                                            <Form.Control
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                type="email"
                                                name="email" 
                                                placeholder="Email"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label
                                                htmlFor="" /* TODO: ID needed for input */
                                                label="Password"
                                            ></Form.Label>
                                            <Form.Control 
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                name="password" 
                                                placeholder="Password"
                                            />
                                        </Form.Group>

                                        <Button
                                            disabled={!(this.state.email && this.state.password)}
                                            onClick={this.handleFormSubmit}
                                        >
                                            Submit
                                        </Button>

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

                                        <Form.Group>
                                            <Form.Label
                                                htmlFor="" /* TODO: ID needed for input */
                                                label="First Name"
                                            ></Form.Label>
                                            <Form.Control
                                                value={this.state.firstname}
                                                onChange={this.handleInputChange}
                                                name="firstname"
                                                type="text"
                                                placeholder="First Name"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label
                                                htmlFor="" /* TODO: ID needed for input */
                                                label="Last Name"
                                            ></Form.Label>
                                            <Form.Control
                                                value={this.state.lastname}
                                                onChange={this.handleInputChange}
                                                name="lastname"
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label
                                                htmlFor="" /* TODO: ID needed for input */
                                                label="Username"
                                            ></Form.Label>
                                            <Form.Control
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label
                                                htmlFor="" /* TODO: ID needed for input */
                                                label="Password"
                                            ></Form.Label>
                                            <Form.Control 
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                name="password"
                                                placeholder="Password"
                                            />
                                        </Form.Group>

                                        <Button
                                            disabled={!(this.state.email && this.state.password && this.state.firstname && this.state.lastname)}
                                            onClick={this.handleFormSubmit}
                                        >
                                            Submit
                                        </Button>

                                    </Form>
                                </Modal.Body>
                            </Modal>

                        </ButtonToolbar>
                    </Navbar>
                    
                    

                    <Container>

                        <Jumbotron fluid >
                            <p>App description to go here.</p>
                        </Jumbotron>

                    </Container>
                    
                </>
                            
            );
        
        }
        
    }
};

export default Home ;