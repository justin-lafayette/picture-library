import React from 'react';
import ReactDom from 'react-dom';
import { useSignUpForm, useSingInForm } from '../CustomHooks';
import { Modal, Form } from 'react-bootstrap';

export const SignInModal = ({signinShow, setSignin}) => {

    const {newInputs, handleSignUpInputChange, handleSignUpSubmit} = useSignUpForm;
    const {rtnInputs, handleSignInInputChange, handleSignInSubmit} = useSingInForm;
    
    isShowing ? ReactDom.createPortal(
        <>
            <Modal
                size="md"
                show={signinShow}
                onHide={() => setSignin(false)}
                aria-labelledby="signin-modal"
            >
                <Modal.Header closeButton>

                    <Modal.Title id="signin-modal">
                        Sign-In
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleSignInSubmit}>
                        {/* {this.state.badSignin ? (
                            
                            <Alert variant={"danger"}>
                                Wrong Username or Password
                            </Alert>

                            ): (<></>)} */}

                        <Form.Group>

                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={handleSignInInputChange}
                                type="email"
                                name="email" 
                                placeholder="Email"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                onChange={handleSignInInputChange}
                                name="password" 
                                placeholder="Password"
                                type="password"
                            />
                        </Form.Group>

                        {/* {this.state.loading ? ( */}

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

                         {/* ):( */}

                            {/* <Button
                            disabled={!(this.state.email && this.state.password)}
                            onClick={this.handleSignInFormSubmit}
                            >
                                Submit
                            </Button> */}

                         {/* )} */}

                    </Form>

                </Modal.Body>
            </Modal>
        </>
    ) : (null);
}