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
        event_description: "",
        event_id: ""

    }
    
    // Functions
    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    loadEvents = ()=> {
        Api.getEvents()
            .then(res => {
                console.log('in EventsSearch.js - res ',res);
                this.setState({ events: res.data, title:"", event_description:"", event_id:"" });
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

    sendToEvent = (e) => {
        e.preventDefault();
        let targetId = e.target.id;
        console.log(e.target.id)
        console.log(targetId)
        this.setState({event_id: targetId}, () => {
            
            console.log(this.state.event_id)
            this.props.history.push("/event/:id", [this.state.event_id])
        
        })   
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
                                                key={events.event_id}
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

                                    <Row key={events.event_id}>
                                        <Card style={{width:"100rem"}}>
                                            
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
                                                    <hr />
                                                    <Row>
                                                        <Col xs={10}>
                                                            <Card.Text>{events.event_description}</Card.Text>
                                                        </Col>
                                                        <Col xs={2} className="text-center">
                                                            <Button
                                                                id={events.event_id}
                                                                onClick ={this.sendToEvent} 
                                                            >
                                                                See More
                                                            </Button>
                                                        </Col>
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