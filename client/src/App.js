import React/* , { Component } */ from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';

// import Navbar from './components/Navbar.js';
// import OurModal from './components/OurModal';
// import Modal from 'react-modal';

// class App extends Component {

//   state = {

//     modalIsOpen: false
    

//   };

  // openModal = () => {
  //   this.setState({modalIsOpen: true});
  // }

  // afterOpenModal = () => {
  //   // references are now sync'd and can be accessed.
    
  // }

  // closeModal = () => {
  //   this.setState({modalIsOpen: false});
  // }

  // render() {
  //   return(

      // <div>

      //   <Navbar
      //     openModal={this.openModal}
      //   />
        
      //   <Modal
      //     isOpen={this.state.modalIsOpen}
      //     onAfterOpen={this.afterOpenModal}
      //     onRequestClose={this.closeModal}
      //     // closeModal={this.closeModal}
      //     // openModal={this.openModal}
      //     contentLabel="Example Modal" 
      //     appElement={document.getElementById("root")}
      //     >
      //     <OurModal 
      //       closeModal={this.closeModal}
      //     />
      //   </Modal>

      // </div>
//     )
//   }

// }

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
      </div>
    </Router>
  );
}

export default App;
