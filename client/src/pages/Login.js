/* TODO: create a landing page for non-authenticated users */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Api from '../utils/Api';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Login extends Component {

    state = {
        auth: false,
        rtnEmail: "",
        rtnPassword: "",
        newEmail: "",
        newPassword: "",
        newFirstname: "",
        newLastname: ""

    }
    
    // Functions
    /* TODO: Function to show event search if sign-in is valid */

    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
    }
    
    handleSignIn = event => {
        event.preventDefault();

        console.log("sign-in form:")
        console.log(this.state.rtnEmail);
        console.log(this.state.rtnPassword);
        Api.signIn({
            email: this.state.rtnEmail,
            password: this.state.rtnPassword
        });
    }

    handleSignUp = event => {
        event.preventDefault();
        
        console.log("sign-up form:")
        console.log(this.state.newFirstname);
        console.log(this.state.newLastname);
        console.log(this.state.newEmail);
        console.log(this.state.newPassword);
        Api.signUp({
            firstname: this.state.newFirstname,
            lastname: this.state.newLastname,
            email: this.state.newEmail,
            password: this.state.newPassword
        })
            .then()
            .catch( err => console.log(err));
    }


    // Render Elements
    render() {
        return(
            <>
        
                {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                <Navbar
                    
                />
                
                <Container>

                    <Row>
                        <Col
                        >
                            <Form>

                                <Form.Group>
                                    <Form.Label
                                        htmlFor="" /* TODO: ID needed for input */
                                        label="Username"
                                    ></Form.Label>
                                    <Form.Control
                                        value={this.state.rtnEmail}
                                        onChange={this.handleInputChange}
                                        type="email"
                                        name="rtnEmail" 
                                        placeholder="Email"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label
                                        htmlFor="" /* TODO: ID needed for input */
                                        label="Password"
                                    ></Form.Label>
                                    <Form.Control 
                                        value={this.state.rtnPassword}
                                        onChange={this.handleInputChange}
                                        name="rtnPassword" 
                                        placeholder="Password"
                                    />
                                </Form.Group>

                                <Button
                                    disabled={!(this.state.rtnEmail && this.state.rtnPassword)}
                                    onClick={this.handleSignIn}
                                >
                                    Submit
                                </Button>

                            </Form>
                        
                        </Col>

                        <Col
                        >
                            <Form>

                                <Form.Group>
                                    <Form.Label
                                        htmlFor="" /* TODO: ID needed for input */
                                        label="First Name"
                                    ></Form.Label>
                                    <Form.Control
                                        value={this.state.newFirstname}
                                        onChange={this.handleInputChange}
                                        name="newFirstname"
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
                                        value={this.state.newLastname}
                                        onChange={this.handleInputChange}
                                        name="newLastname"
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
                                        value={this.state.newEmail}
                                        onChange={this.handleInputChange}
                                        name="newEmail"
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
                                        value={this.state.newPassword}
                                        onChange={this.handleInputChange}
                                        name="newPassword"
                                        placeholder="Password"
                                    />
                                </Form.Group>

                                <Button
                                    disabled={!(this.state.newEmail && this.state.newPassword && this.state.newFirstname && this.state.newLastname)}
                                    onClick={this.handleSignUp}
                                >
                                    Submit
                                </Button>

                            </Form>

                        </Col>

                    </Row>

                </Container>
                
                
            </>
                        
        );
        
    }
};

export default Login;