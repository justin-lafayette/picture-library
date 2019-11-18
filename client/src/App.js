import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

/* Pages */
import Home from './pages/Home';
import EventSearch from './pages/EventSearch';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import Event from './pages/Event';
import Login from './pages/Login';
import CreateEvent from './pages/CreateEvent';
import Upload from './pages/Upload'
import Scanner from './pages/Scan';
import QRCodePrint from './pages/QRPrint';
import Navbar from './components/Navbar';

class App extends Component {
  
  render() {
    return (
      <>
      
        <Route exact path="/" component={Login} />

        {/* <Route exact path="/" component={Home} /> */}
      
      </>
    )
  }
} 


export default App;
