import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import OurModal from './components/Navbar.js/OurModal';
import Modal from 'react-modal';

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
    return(

      <div>

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

      </div>
    )
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

//       <Modal />
//     </div>
//   );
// }

export default App;
