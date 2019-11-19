/* This page will show specific events */
import React, { Component } from "react";
import SiteNavbar from "../components/SiteNavbar";
import {
  Row,
  Col,
  Container,
  Image,
  Button,
  Card,
  CardGroup,
  Jumbotron,
  Modal,
  Spinner
} from "react-bootstrap";
import Api from "../utils/Api";
import axios from "axios";
import Dropzone from "react-dropzone";
import { FaFileUpload } from "react-icons/fa";
import "../components/ImageUpload/style.css";
import ControlledCarousel from "../components/ControlledCarousel";
import { Link } from 'react-dom';

// import one from '../assets/images/pkm1.png';
// import two from '../assets/images/pkm2.png';
// import three from '../assets/images/pkm3.png';
// import four from '../assets/images/pkm4.png';
// import five from '../assets/images/pkm5.png';
// import six from '../assets/images/pkm6.png';
// import seven from '../assets/images/pkm7.png';
// import eight from '../assets/images/pkm8.png';

const imageMaxSize = 100000000;
const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map(item => {
  return item.trim();
});

// const tempPics = [
//     one, two, three, four, five, six, seven, eight
// ]

class Event extends Component {
  state = {
    email: "justin.kyle.barfield@gmail.com",
    event: [],
    event_id: "",
    title: "",
    event_description: "",
    event_date: "",
    eventPics: [],
    auth: true,
    uploadShow: false,
    file: null,
    imgSrc: null,
    loading: false,
    testPic: null,
    subscribedToEvent: null,
    pageLoaded: false,
  };

  // Functions
  componentWillMount() {
    console.log("Component did mount");
    console.log(this.props.match.params.id);
    this.setState({ event_id: this.props.match.params.id });

    // ID from the selected event
    console.log("this location: ", this.props.location);

    // Api.isAuth().then(res => {
    //   if (res.data.user) {
    //     this.setState({
    //       email: res.data.user.email,
    //       isAuth: true
    //     });
    //   } else {
    //     this.setState({
    //       email: "",
    //       isAuth: false
    //     });
    //     this.props.history.push("/login");
    //     console.log("email", this.state.email);
    //   }
    // });

    Api.loadSingleEvent(this.props.match.params.id)
      .then(res => {
        console.log("loadSingleEvent: ", res);
        this.setState({
          event_date: res.data.event_date,
          event_description: res.data.event_description,
          title: res.data.title
        });
      })
      .then(res => {
        this.checkIfSubscribed();
        axios
          .get(`/events/event/${this.state.event_id}/pictures`)
          .then(res => {
            console.log("inside get my pics: event");
            console.log(this.state.event_id);
            console.log(res);
            console.log(res.data);
            this.setState({ eventPics: res.data });
            // this.setState({testPic: res.data[1].picture_url});
            console.log(this.state.eventPics);
          })
          .then(() => this.setState({pageLoaded: true}))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));


  }

  /* Handle input change */
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  checkIfSubscribed = event => {
    // this.props.location.reload();
    console.log("in checkIfSubscribed");
    console.log("email in checkIfSubscribed", this.state.email);
    console.log("event_id in checkIfSubscribed", this.state.event_id);

    /* Call a controller function to chekc if the user has subscribed to the event already */
    Api.isSubscribed(this.state.email, this.state.event_id).then(res => {
      console.log("In checkIfSubscribed res");
      console.log(res);
      console.log("After  checkIfSubscribed");
      if (res.data.length > 0) {
        this.state.subscribedToEvent = true;
      } else {
        this.state.subscribedToEvent = false;
      }

      console.log("this.state.subscribedToEvent", this.state.subscribedToEvent);
    });
  };

  // needs back-end route
  handleSubscribe = event => {
    event.preventDefault();
    // this.props.location.reload();
    console.log("in handleSubscribe");
    console.log("email", this.state.email);
    console.log("event_id", this.state.event_id);

    Api.subscribe(this.state.email, this.state.event_id).then(res => {
      console.log(res);
      this.setState({ subscribedToEvent: true });
    });
  };

  // Needs back-end route
  getSubStatus = () => {
    Api.SubStatus().then(res => {
      this.setState({
        event: res.data,
        email: "",
        event_id: "",
        title: "",
        event_description: "",
        subscribedToEvent: ""
      });
    });
  };

  handleUploadShow = () => this.setState({ uploadShow: true });

  uploadImage = () => {
    console.log("in Event.js - uploadImage");
    return axios.post("/uploadpic").catch(err => console.log(err.response));
  };

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
    this.setState({ loading: true });

    const formData = new FormData();
    formData.append("image", this.state.file, this.state.filename);
    formData.append("event_id", this.props.event_id);

    Api.uploadPic(formData)
      .then(res => {
        this.setState({
          uploadShow: false,
          loading: false
        });

        this.props.history.push(`/event/${this.state.event_id}`);
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log("this.state: ", this.state);
    console.log("sub state: ", this.state.subscribedToEvent)
    const { imgSrc } = this.state;
    return (
      <>
      {this.state.pageLoaded ? (
      <>
        {this.state.subscribedToEvent ? (
          <>
            <SiteNavbar isAuth={this.state.isAuth}>
              <Button onClick={() => this.handleUploadShow()}>
                Upload Image
              </Button>

              <Modal
                size="xl"
                show={this.state.uploadShow}
                onHide={() => this.setState({ uploadShow: false })}
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
                                <img
                                  className={"dropzone-custom"}
                                  src={imgSrc}
                                  alt=" "
                                />
                              </div>
                            ) : (
                              ""
                            )}

                            <FaFileUpload id="iconid" />

                            <br />
                            <p style={{ marginBottom: 0 }}>
                              Drag and Drop image here
                            </p>
                            <p style={{ marginBottom: 0 }}>or</p>
                            <input {...getInputProps()} />
                            <br />
                            <button
                              type="submit"
                              className="btn btn-primary mb-2"
                            >
                              Browse Files
                            </button>
                          </div>
                        )}
                      </Dropzone>
                    </Jumbotron>

                    {this.state.loading ? (
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
                    ) : (
                      <Button
                        onClick={this.handleFormSubmit}
                        type="submit"
                        disabled={!this.state.file}
                      >
                        Upload
                      </Button>
                    )}
                  </div>
                </Modal.Body>
              </Modal>
            </SiteNavbar>

            <Jumbotron
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                height: "45vh"
              }}
            >
              <h3>{this.state.title}</h3>

              <ControlledCarousel images={this.state.eventPics} />

            </Jumbotron>

            

            <Container>
              <Row>
                <Col>
                  <p>
                    Description
                    <br />
                    {this.state.event_description}
                    <br />
                    {this.state.event_date}
                  </p>
                </Col>
              </Row>

              <Row>
                <Col></Col>
              </Row>

              <Row>
                <Col>
                  <CardGroup>
                    {this.state.eventPics.map(event => {
                      return (
                        <Card key={event.picture_id}>
                          <Card.Img src={event.picture_url} />
                        </Card>
                      );
                    })}
                  </CardGroup>
                </Col>
              </Row>
            </Container>
          </>
        ) : (
          <>
            <SiteNavbar isAuth={this.state.isAuth} />

            <Container>
              <Col>
                <Row>
                  <Col xs={2} md={4}>
                    <div>
                      <img src={"http://api.qrserver.com/v1/create-qr-code/?data=" + this.state.event_id}></img>
                      <Link to={"/qrprint/" + this.state.event_id + "/" + this.state.eventTitle}> </Link>
                    </div>
                  </Col>

                  <Col>
                    <Row style={{ height: 100 }}>{this.state.title}</Row>
                    {this.state.subscribedToEvent ? null : (
                        
                    <Row style={{ height: 100 }}>
                      <Button onClick={this.handleSubscribe}>
                          Subscribe
                        </Button>
                    </Row>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col style={{ height: 100 }}>{this.state.description}</Col>
                </Row>
              </Col>
            </Container>
          </>
        )}
      </>
      ):(
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      </>
    );
  }
}

export default Event;
