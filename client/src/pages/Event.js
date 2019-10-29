import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import Api from '../utils/Api';


class Home extends Component {

    state = {
        modalIsOpen: false,
        signInModal: false,
        signUpModal: false,
        username: "",
        password: "",
        firstname: "",
        lastname: ""

    }
    
    // Functions
    /* Switch case added to take in the value from the navbar component and set the state to the proper Modal to be displayed. */
    openModal = (modalToOpen) => {
        switch (modalToOpen) {
            case 1:
                /* Sign-In modal */
                this.setState({ signInModal : true, signUpModal: false, modalIsOpen: true });
                break;

            case 2:
                /* Sign-Up modal */
                this.setState({ signUpModal : true, signInModal: false, modalIsOpen: true });
                break;

            case 3:
                /* Picture upload */

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
        /* TODO: handle form submit for searching events */
    }

    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        /* TODO: remove consol log */
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
                {/* TODO: option needed to verify if sign-in is valid. if so do not render the sign-in/sign-up buttons */}
                <Navbar
                    openModal={(modalToOpen) => this.openModal(modalToOpen)}
                />
                
                

                <Col num="md-10">
                    <Jumbotron fluid />
                </Col>
                
            </div>
                        
        );
        
    }
};

export default Home;