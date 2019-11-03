import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Input, InputLabel, FormGroup, FormSubmit } from '../components/Form';
import { Col } from '../components/Grid';
import Modal from 'react-modal';
import { SignInModal, SignUpModal } from '../components/OurModal';
import Jumbotron from '../components/Jumbotron';
import Api from '../utils/Api';
import {Button} from 'react-bootstrap'



class Home extends Component {

    state = {
        modalIsOpen: false,
        signInModal: false,
        signUpModal: false,
        email: "",
        password: "",
        firstname: "",
        lastname: ""

    }
    
    // Functions
    /* Switch case added to take in the value from the navbar component and set the state to the proper Modal to be displayed. */
    openModal = (modalToOpen) => {
        switch (modalToOpen) {
            case 1:
                this.setState({ signInModal : true, signUpModal: false, modalIsOpen: true });
                break;

            case 2:
                this.setState({ signUpModal : true, signInModal: false, modalIsOpen: true });
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
        if( this.state.signInModal ) {
            console.log("sign-in form:")
            console.log(this.state.email);
            console.log(this.state.password);
            Api.signIn({
                email: this.state.email,
                password: this.state.password
            })
                .then(/* TODO: (res) => this.--Function to show event search if sign-in is valid */)
                .catch( err => console.log(err));
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

    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
    }
    


    // Render Elements
    render() {
        return(
            <div>
        
                {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                <Navbar
                    openModal={(modalToOpen) => this.openModal(modalToOpen)}
                />
                
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal" 
                    appElement={document.getElementById("root")}
                >
                    {/* If the state for signInModal is true render this. If not render the other. */}
                    {/* Nesting components like this requires you to pass {props.children} into the parent component so the children can be rendered. */}
                    {this.state.signInModal ? 
                    <SignInModal 
                        closeModal={this.closeModal}
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
                                    name="email" 
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
                                // disabled={!(this.state.email && this.state.password)}
                                onClick={this.handleFormSubmit}
                            />

                        </form>

                    </SignInModal> : ""}

                    {this.state.signUpModal ? <SignUpModal 
                        closeModal={this.closeModal}
                        className ={"background: 'blue'; color: 'white'"}
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
                                    name="email"
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
                                />
                            </FormGroup>

                            <Button
                                // disabled={!(this.state.email && this.state.password)}
                                onClick={this.handleFormSubmit}
                                // variant="flat"
                                // className ={"background: 'purple',color:'white'"}
                            ></Button>

                        </form>

                        </SignUpModal> : ""}

                </Modal>

                <Col num="md-10">
                    <Jumbotron fluid />
                </Col>
                
            </div>
                        
        );
        
    }
};

export default Home;