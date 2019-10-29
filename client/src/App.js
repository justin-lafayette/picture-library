// import React, { Component } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar/index.js";
// import OurModal from "./components/OurModal";
// import Modal from "react-modal";
// import Upload from "./components/Upload";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// class App extends Component {
//   state = {
//     modalIsOpen: false
//   };

//   openModal = () => {
//     this.setState({ modalIsOpen: true });
//   };

//   afterOpenModal = () => {
//     // references are now sync'd and can be accessed.
//   };

//   closeModal = () => {
//     this.setState({ modalIsOpen: false });
//   };

//   render() {
//     return (
//       <Router>
//         <div>
//           <Switch>
//           {/* <Upload style={{border: "1px solid black", height: 100, width: 200, background: "#eee"}} /> */}
//           <Navbar openModal={this.openModal} />

//           <Modal
//             isOpen={this.state.modalIsOpen}
//             onAfterOpen={this.afterOpenModal}
//             onRequestClose={this.closeModal}
//             // closeModal={this.closeModal}
//             // openModal={this.openModal}
//             contentLabel="Example Modal"
//             appElement={document.getElementById("root")}
//           >
//             <OurModal closeModal={this.closeModal} />
//           </Modal>
//           <Route path="/upload" Component={Upload} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

import React/* , { Component } */ from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import Upload from "./components/Upload";
import Navbar from "./components/Navbar/index.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/404" component={PageNotFound} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/upload" Component={Upload} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
