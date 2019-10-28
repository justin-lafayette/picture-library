import React/* , { Component } */ from 'react';
import './App.css';
<<<<<<< HEAD
import Navbar from './components/Navbar.js';
import OurModal from './components/OurModal';
import Modal from 'react-modal';
import Upload from './components/Upload';


class App extends Component {

  state = {

    modalIsOpen: false
    

  };

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (

      <div>
        <Upload style={{border: "1px solid black", height: 100, width: 200, background: "#eee"}} />
        <Navbar
          openModal={this.openModal}
        />
        
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          // closeModal={this.closeModal}
          // openModal={this.openModal}
          contentLabel="Example Modal" 
          appElement={document.getElementById("root")}
          >
          <OurModal 
            closeModal={this.closeModal}
          />
        </Modal>

=======
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/404" component={PageNotFound} />
          <Route exact path="/profile" component={Profile} />
          
        </Switch>
>>>>>>> dd2f67d08a236755d16216e65d8682b5e1c9a11e
      </div>
    </Router>
  );
}

export default App;
