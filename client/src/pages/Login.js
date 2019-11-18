import React, { useState } from 'react';
import { Row, Col, Form, Container, Alert, Card, Button, Spinner } from 'react-bootstrap';
import useForm from 'react-hook-form';

export default function Login() {

    const [toggleState, setToggle] = useState("signin");
    const [badSignin, setBadsignin] = useState(false);
    const [badSignup, setBadsignup] = useState(false);
    const [loading, setLoading] = useState(false);

    const {register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        setLoading();
        Api.signIn({
            email: data.rtnEmail,
            password: data.rtnPassword
        })
    }

    // function toggle() {
    //     setToggle(toggleState = "signin" ? "signup" : "signin")
    // }

    return(
        <Container>
                            
            <div className="jumbotron" style={{marginTop: 50, borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.75)"}}>
                
                <Row>
                    
                    <Col>                         
                        <Card.Title>Sign In</Card.Title>
                        
                            <Form onSubmit={handleSubmit(onSubmit)}>
                            
                                {badSignin ? (
                                    <Alert variant={"danger"}>
                                        Wrong Username or Password
                                    </Alert>
                                ): (<></>)}

                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        ref={register({ required: true})}
                                        // onChange={handleSignInInputChange}
                                        type="email"
                                        name="rtnEmail" 
                                        placeholder="Email"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        ref={register({ required: true})}
                                        // onChange={handleSignInInputChange}
                                        name="rtnPassword" 
                                        placeholder="Password"
                                    />
                                </Form.Group>

                                {loading ? (
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
                                        // disabled={!(newInputs.rtnEmail && newInputs.rtnPassword)}
                                        // onClick={handleSignInSubmit}
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                )}

                            </Form>
                    
                    </Col>
                    
                    <Col>

                        <Card.Title>Sign Up</Card.Title>

                            {/* <Form onSubmit={handleSubmit(onSubmit)}>

                                {badSignup ? (
                                    <Alert variant={"danger"}>
                                        User already exists!
                                    </Alert>
                                ):(<></>)}

                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        ref={register({ required: true})}
                                        // onChange={handleSignUpInputChange}
                                        name="newFirstname"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        ref={register({ required: true})}
                                        // onChange={handleSignUpInputChange}
                                        name="newLastname"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </Form.Group>

                                <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        ref={register({ required: true})}
                                        // onChange={handleSignUpInputChange}
                                        name="newEmail"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        ref={register({ required: true})}
                                        // onChange={handleSignUpInputChange}
                                        name="newPassword"
                                        placeholder="Password"
                                    />
                                </Form.Group>

                                {loading ? (
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
                                        // disabled={!(newInputs.newEmail && newInputs.newPassword && newInputs.newFirstname && newInputs.newLastname)}
                                        // onClick={handleSignUpSubmit}
                                        type="submit"
                                    >
                                        Submit
                                    </Button>

                                )}

                            </Form> */}

                    </Col>

                </Row>
            </div>
        </Container>
    )
}