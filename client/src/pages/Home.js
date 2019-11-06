import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Modal from 'react-modal';
import { Container } from '../components/Grid'
import { InputLabel, Input, FormSubmit, FormGroup } from '../components/Form';
import { SignInModal, SignUpModal, CreateEventModal } from '../components/OurModal';
import Jumbotron from '../components/Jumbotron';
import Api from '../utils/Api';
// import { withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';


class Home extends Component {

    state = {
        modalIsOpen: false,
        signInModal: false,
        signUpModal: false,
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        auth: false

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
        if( this.state.signInModal ) {
            Api.signIn({
                email: this.state.email,
                password: this.state.password
            })
                .then( res => {
                    this.props.history("/")
                })
                .catch( err => console.log(err));
        }

        if( this.state.signUpModal ) {
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
        this.setState({
            [name]: value
        });
    }
    


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
                <div>
            
                    {/* Needs to be passed as an arrow function and the onclick event written as an arrow function in the component */}
                    <Navbar
                        openModal={(modalToOpen) => this.openModal(modalToOpen)}
                        auth={this.state.auth}
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
                        {this.state.auth }

                        <CreateEventModal />
                        
                        {this.state.signInModal ? 
                        <SignInModal 
                            closeModal={this.closeModal}
                        >
                            <Form>

                                <Form.Group>
                                    <Form.Label
                                        htmlFor="" /* TODO: ID needed for input */
                                        label="Username"
                                    />
                                    <Form.Control
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        type="email"
                                        name="email" 
                                        placeholder="Email"
                                    />
                                </Form.Group>

                                <Form.Group>
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
                                </Form.Group>

                                <FormSubmit
                                    // disabled={!(this.state.email && this.state.password)}
                                    onClick={this.handleFormSubmit}
                                />

                            </Form>

                        </SignInModal> : ""}

                        {this.state.signUpModal ? <SignUpModal 
                            closeModal={this.closeModal}
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

                                <FormSubmit
                                    // disabled={!(this.state.email && this.state.password)}
                                    onClick={this.handleFormSubmit}
                                />

                            </form>

                            </SignUpModal> : ""}

                    </Modal>

                    <Container>

                        <Jumbotron fluid >
                            <p>App description to go here.</p>
                        </Jumbotron>

                    </Container>
                    
                </div>
                            
            );
        
        }
        
    }
};

export default Home ;