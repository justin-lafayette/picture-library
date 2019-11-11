/* TODO: create a landing page for non-authenticated users */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Api from '../utils/Api';
import { Container, Row, Col, Form, Button, Jumbotron, Card, Spinner, Alert } from 'react-bootstrap';
import Scanner from './Scan';

class Login extends Component {

    state = {
        auth: false,
        email: "",
        rtnEmail: "",
        rtnPassword: "",
        newEmail: "",
        newPassword: "",
        newFirstname: "",
        newLastname: "",
        loading: false,
        badSignin: false,
        badSignup: false,

    }

    // Functions
    /* TODO: Function to show event search if sign-in is valid */

    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    handleSignIn = event => {
        event.preventDefault();
        this.setState({loading: true});
        Api.signIn({
            email: this.state.rtnEmail,
            password: this.state.rtnPassword
        })
            .then( () => {
                Api.isAuth()
                    .then( res => {
                        if( res.data.user ) {
                            this.setState({
                                rtnEmail: res.data.user.email,
                                isAuth: true,
                                badSignin: false
                            });
                            this.props.history.push('/');
                        } else {
                            this.setState({
                                rtnPassword: "",
                                isAuth: false,
                                badSignin: true,
                                loading: false
                            });
                        }
                    })
            })
        .catch( err => console.log(err));
    }

    handleSignUp = event => {
        event.preventDefault();
        this.setState({loading: true});
        Api.signUp({
            firstname: this.state.newFirstname,
            lastname: this.state.newLastname,
            email: this.state.newEmail,
            password: this.state.newPassword
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

    componentDidMount() {
        Api.isAuth()
          .then( res => {
            if( res.data.user ) {
              this.setState({
                email: res.data.user.email,
                isAuth: true
              });
              this.props.history.push('/');
            } else {
              this.setState({
                email: "",
                isAuth: false
              })
              this.props.history.push('/login');
            }
        })
    }

    // Render Elements
    render() {
        return(
            <>
        
                {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                <Navbar
                    isAuth={this.state.isAuth}
                />
                
                <Jumbotron>

                    <Container>

                        <Row>
                            <Col
                            >
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Sign In</Card.Title>

                                            <Form>

                                            {this.state.badSignin ? (
                                                <Alert variant={"danger"}>
                                                    Wrong Username or Password
                                                </Alert>
                                            ): (<></>)}

                                                <Form.Group>
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control
                                                        value={this.state.rtnEmail}
                                                        onChange={this.handleInputChange}
                                                        type="email"
                                                        name="rtnEmail" 
                                                        placeholder="Email"
                                                    />
                                                </Form.Group>

                                                <Form.Group>
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control 
                                                        value={this.state.rtnPassword}
                                                        onChange={this.handleInputChange}
                                                        name="rtnPassword" 
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
                                                    disabled={!(this.state.rtnEmail && this.state.rtnPassword)}
                                                    onClick={this.handleSignIn}
                                                    >
                                                        Submit
                                                    </Button>
                                                )}

                                            </Form>

                                    </Card.Body>
                                </Card>
                            
                            </Col>

                            <Col
                            >
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Sign Up</Card.Title>

                                        <Form>

                                            {this.state.badSignup ? (
                                                <Alert variant={"danger"}>
                                                    User already exists!
                                                </Alert>
                                            ):(<></>)}

                                            <Form.Group>
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    value={this.state.newFirstname}
                                                    onChange={this.handleInputChange}
                                                    name="newFirstname"
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control
                                                    value={this.state.newLastname}
                                                    onChange={this.handleInputChange}
                                                    name="newLastname"
                                                    type="text"
                                                    placeholder="Last Name"
                                                />
                                            </Form.Group>

                                            <Form.Group>
                                                    <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    value={this.state.newEmail}
                                                    onChange={this.handleInputChange}
                                                    name="newEmail"
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control 
                                                    value={this.state.newPassword}
                                                    onChange={this.handleInputChange}
                                                    name="newPassword"
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
                                                    disabled={!(this.state.newEmail && this.state.newPassword && this.state.newFirstname && this.state.newLastname)}
                                                    onClick={this.handleSignUp}
                                                >
                                                    Submit
                                                </Button>

                                            )}

                                        </Form>

                                    </Card.Body>
                                </Card>

                            </Col>

                        </Row>

                    </Container>
                
                </Jumbotron>
                
            </>
                        
        );
        
    }
};

export default Login;