import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Api from '../utils/Api';
import { Container, Col, Row, Dropdown, Card, Image, Button } from 'react-bootstrap';


class EventSearch extends Component {

    state = {
        auth: "",
        email: "",
        events: [],
        title: "",
        description: "",
        id: ""

    }
    
    // Functions
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
    
    loadEvents = ()=> {
        Api.getEvents()
            .then(res => {
                console.log('in EventsSearch.js - res ',res);
                this.setState({ events: res.data, title:"", description:"", id:"", eventLink:"" })
            })
            .catch( err => console.log( err ) )
    }

    componentDidMount() {
        console.log("Component did mount");
        this.loadEvents();

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
              this.props.history.push('/login');
            }
            console.log("email", this.state.email);
        })
    }

    goToEvent = () => {
        Api.loadSingleEvent()
            .then( res => {

            })
            .catch( err => console.log( err ) )
    }


    // Render Elements
    render() {
        return(
            <>
        
                <Navbar
                    isAuth={this.state.isAuth}
                />

                <Container>

                    <Col
                    
                    >
                        <Row>
                            <Col
                            
                            >
                                {/* TODO: convert to custom dropdown component like in docs online */}
                                <Dropdown>

                                    <Dropdown.Toggle 
                                    variant="success"
                                    id="events-dropdown"
                                    >
                                        Search Events!
                                    </Dropdown.Toggle>

                                    {this.state.events.length ? (
                                        
                                        <Dropdown.Menu>
                                            {this.state.events.map(events => (
                                                <Dropdown.Item
                                                key={events.id}
                                                /* TODO: onClick() */
                                                >
                                                    {events.title}
                                                </Dropdown.Item>
                                                ))}
                                        </Dropdown.Menu>

                                    ) : (

                                        <Dropdown.Menu>
                                            <Dropdown.Item>No Events Available</Dropdown.Item>
                                        </Dropdown.Menu>

                                    )}
                                    
                                </Dropdown>

                            </Col>
                        </Row>
                    {this.state.events.length ? (
                        
                        <Row
                        
                        >
                            <Col
                            
                            >
                                {this.state.events.map(events => (

                                    <Row key={events._id}>
                                        <Card>
                                            <Card.Body>

                                                <Col
                                                
                                                >
                                                    <Image 
                                                    /* TODO: href={{events.eventLink}} */
                                                    />
                                                </Col>

                                                <Col
                                                
                                                >
                                                    <Row>
                                                        <Card.Title>{events.title}</Card.Title>
                                                    </Row>
                                                    <Row>
                                                        <Card.Text>{events.description}</Card.Text>
                                                        <Button
                                                        /* TODO: href={{events.eventLink}} */
                                                        >
                                                            See More
                                                        </Button>
                                                    </Row>
                                                </Col>

                                            </Card.Body>
                                        </Card>
                                    </Row>

                                ))}
                            </Col>

                        </Row>

                    ) : (<h3>No events to display!</h3>)}
                    
                    </Col>
                    
                </Container>
                
            </>
                        
        );
        
    }
};

export default EventSearch;