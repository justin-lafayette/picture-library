/* TODO: create a landing page for non-authenticated users */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Input, InputLabel, FormGroup, FormSubmit } from '../components/Form';
import { Col, Row, Container } from '../components/Grid';
// import Jumbotron from '../components/Jumbotron';
import Api from '../utils/Api';


class Login extends Component {

    state = {
        auth: false,
        email: "",
        password: "",
        firstname: "",
        lastname: ""

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
    
    handleFormSubmit = event => {
        event.preventDefault();
        if( this.state.signInModal ) {
            console.log("sign-in form:")
            console.log(this.state.email);
            console.log(this.state.password);
            Api.signIn({
                email: this.state.email,
                password: this.state.password
            });
        }

        if( this.state.signUpModal ) {
            console.log("sign-up form:")
            console.log(this.state.firstname);
            console.log(this.state.lastname);
            console.log(this.state.email);
            console.log(this.state.password);
            Api.signUp({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password
            })
                .then(/* TODO: (res) => this.--Function to show event search if sign-in is valid */)
                .catch( err => console.log(err));
        }
    }


    // Render Elements
    render() {
        return(
            <div>
        
                {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                <Navbar
                    openModal={(modalToOpen) => this.openModal(modalToOpen)}
                />
                
                <Container>

                    <Row>
                        <Col
                        num={"5"}
                        >
                            <form>

                                <FormGroup>
                                    <InputLabel
                                        htmlFor="" /* TODO: ID needed for input */
                                        label="Username"
                                    />
                                    <Input
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        type="email"
                                        name="username" 
                                        placeholder="Email"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <InputLabel
                                        htmlFor="" /* TODO: ID needed for input */
                                        label="Password"
                                    />
                                    <Input 
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password" 
                                        placeholder="Password"
                                    />
                                </FormGroup>

                                <FormSubmit
                                    disabled={!(this.state.email && this.state.password)}
                                    onClick={this.handleFormSubmit}
                                />

                            </form>
                        
                        </Col>

                        <Col
                        num={"7"}
                        >

                            <form>

                                <FormGroup>
                                    <InputLabel
                                        htmlFor="" /* TODO: ID needed for input */
                                        label="First Name"
                                    />
                                    <Input
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}
                                        name="firstname"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <InputLabel
                                        htmlFor="" /* TODO: ID needed for input */
                                        label="Last Name"
                                    />
                                    <Input
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}
                                        name="lastname"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <InputLabel
                                        htmlFor="" /* TODO: ID needed for input */
                                        label="Username"
                                    />
                                    <Input
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        name="username"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <InputLabel
                                        htmlFor="" /* TODO: ID needed for input */
                                        label="Password"
                                    />
                                    <Input 
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                    />
                                </FormGroup>

                                <FormSubmit
                                    disabled={!(this.state.email && this.state.pass && this.state.firstname && this.state.lastname)}
                                    onClick={this.handleFormSubmit}
                                />

                            </form>

                        </Col>

                    </Row>

                </Container>
                
                
            </div>
                        
        );
        
    }
};

export default Login;