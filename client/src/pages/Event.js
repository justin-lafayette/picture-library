/* This page will show specific events */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Row, Col, Container, Image, Button, /* Card, */ CardGroup, Jumbotron, Modal } from 'react-bootstrap';
import Api from '../utils/Api';
import Slideshow from '../components/Slideshow/slideshow';
import axios from 'axios';
import Dropzone from "react-dropzone";
import { FaFileUpload } from 'react-icons/fa';
import '../components/ImageUpload/style.css';

const imageMaxSize = 100000000;
const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map(item => {
  return item.trim();
});

class Event extends Component {

    state = {
        email: "",
        event: [],
        event_id: "",
        title: "",
        event_description: "",
        event_date: "",
        memberOf: true,
        eventPics: [],
        auth: true,
        uploadShow: false,
        file: null,
        imgSrc: null,
        loading: false,

    }
    
    
    // Functions
    componentDidMount() {
        console.log("Component did mount");
        console.log(this.props.match.params.id);
        this.setState({event_id: this.props.match.params.id})
        
        // ID from the selected event
        console.log("this location: ", this.props.location);

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
              console.log("email", this.state.email);
            }
        })

        Api.loadSingleEvent(this.props.match.params.id)
            .then( res => {
                console.log("loadSingleEvent: ", res);
                this.setState({
                    event_date: res.data.event_date,
                    event_description: res.data.event_description,
                    title: res.data.title
                })
            })
            .catch( err => console.log( err ) )

    }

    /* Handle input change */
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    // needs back-end route
    handleSubscribe = event => {
        event.preventDefault();
        Location.reload()

        // Api.subscribe({
        //     email: this.state.email,
        //     eventID: this.state.eventID,
        //     subscribe: true
        // })
        //     .then( res => {
        //         this.props.refresh();
        //     })
    }

    // Needs back-end route
    getSubStatus = () => {

        Api.SubStatus()
            .then( res => {
                this.setState({event: res.data, email: "", event_id: "", title: "", event_description: "",  memberOf: ""})
            })
    }

    handleUploadShow = () => this.setState({uploadShow: true});

    uploadImage = () =>{
        console.log('in Event.js - uploadImage');
        return axios.post("/uploadpic" )
            .catch( err => console.log(err.response));
    }

    // For image upload component
    verifyFile = files => {
        if (files && files.length > 0) {
            const currentFile = files[0];
            const currentFileType = currentFile.type;
            const currentFileSize = currentFile.size;
        if (currentFileSize > imageMaxSize) {
            alert(
            "This file is not allowed. " + currentFileSize + " bytes is too large"
            );
            return false;
        }
        if (!acceptedFileTypesArray.includes(currentFileType)) {
            alert("This file is not allowed. Only images are allowed.");
            return false;
        }
        return true;
        }
    };
    
    handleOnDrop = (files, rejectedFiles) => {
        if (rejectedFiles && rejectedFiles.length > 0) {
            console.log(rejectedFiles);
            this.verifyFile(rejectedFiles);
        }
    
        if (files && files.length > 0) {
            const isVerified = this.verifyFile(files);
            if (isVerified) {
                // imageBase64Data
                const currentFile = files[0];
                this.setState({ file: currentFile });
                const myFileReader = new FileReader();
                myFileReader.addEventListener(
                    "load",
                    () => {
                        console.log(myFileReader.result);
                        this.setState({
                        imgSrc: myFileReader.result
                        });
                    },
                    false
                );
                myFileReader.readAsDataURL(currentFile);
            }
        }
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        
        console.log("in ImageUpload - FILE!");
        console.log(this.state.file);
        console.log(this.props.event_id);
        const formData = new FormData();
        formData.append('image',this.state.file, this.state.filename);
        formData.append('event_id', this.props.event_id)
    
        Api.uploadPic(formData)
          .then(
    
          )
          .catch( err => console.log(err));
        
    }

    render() {
        console.log("this.state: ", this.state)
        const {imgSrc} = this.state
        return(
            <>
                
                {this.state.memberOf ? (
                    <>
                        <Navbar
                            isAuth={this.state.isAuth}
                        >
                            <Button
                                onClick={() => this.handleUploadShow()}
                                
                            >
                                Upload Image
                            </Button>

                            <Modal
                                size="xl"
                                show={this.state.uploadShow}
                                onHide={() =>  this.setState({uploadShow: false})}
                                aria-labelledby="upload-modal"
                                centered
                                id="upload-modal"
                            >
                                <Modal.Body>
                                    <div className="ImageUpload">
                                        <Jumbotron className="text-center">
                                            <h1>Image Upload</h1>

                                            <Dropzone
                                                className=" "
                                                onDrop={this.handleOnDrop}
                                                multiple={false}
                                                accept={acceptedFileTypes}
                                                maxSize={imageMaxSize}
                                                minSize={0}
                                            
                                            >

                                                {({ getRootProps, getInputProps }) => (

                                                    <div className="dropzone-custom" {...getRootProps()}>

                                                        {imgSrc !== null ? (
                                                            <div>
                                                            <img className={"dropzone-custom"} src={imgSrc} alt=" " />
                                                            </div>
                                                        ) : (
                                                            ""
                                                        )}

                                                    <FaFileUpload id = "iconid"/>

                                                    <br />
                                                    <p style={{ marginBottom: 0 }}>Drag and Drop image here</p>
                                                    <p style={{ marginBottom: 0 }}>or</p>
                                                    <input {...getInputProps()} />
                                                    <br />
                                                    <button type="submit" className="btn btn-primary mb-2">
                                                        Browse Files
                                                    </button>
                                                    </div>

                                                )}

                                            </Dropzone>
                                        </Jumbotron>

                                        <Button
                                        onClick={this.handleFormSubmit}
                                        type="submit"
                                        >
                                        Upload
                                        </Button>        
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </Navbar>
                        <div
                            style={{backgroundColor: "red", height: "40vh"}}
                        >

                        
                            {this.state.event_id}
                        </div>

                    
                        <Container>

                            <Row>
                                <Col>
                                    <p>Description
                                        <br />{this.state.event_description}
                                        <br />{this.state.event_date}
                                    </p>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Slideshow
                                        images={this.state.eventPics}
                                    >
                                        
                                    </Slideshow>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <CardGroup>
                                        {/* {this.state.event.map( (event) => {

                                            <Card
                                            key={event.eventID}
                                            >
                                                <Card.Img>
                                                    {event.eventPics}
                                                </Card.Img>
                                            </Card>
                                         }
                                        })*/}
                                    </CardGroup>
                                </Col>
                            </Row>

                        </Container>
                    </>

                ):(

                    <>
                        <Navbar
                            isAuth={this.state.isAuth}
                        />
            
                        <Container>

                            <Col>
                            
                                <Row>
                                    <Col 
                                    xs={2}
                                    md={4}
                                    >

                                        <Image 
                                            src={"https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1"}
                                            style={{maxHeight: 200}}
                                        />

                                    </Col>    

                                    <Col>

                                        <Row
                                        style={{height:100}}
                                        >
                                            {this.state.title}
                                        </Row>

                                        <Row
                                        style={{height:100}}
                                        >           
                                            <Button 
                                                onClick={this.handleSubscribe}
                                            >Subscribe</Button>
                                        </Row>

                                    </Col>
                                </Row>

                                <Row>
                                    <Col
                                    style={{height:100}}
                                    >
                                        {this.state.description}                                        
                                    </Col>
                                </Row>
                            
                            </Col>

                        </Container>
                
                    </>                
                )}
            </>
        )
    }
};

export default Event;

