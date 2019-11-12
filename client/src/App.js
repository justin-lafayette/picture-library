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
// import OurNavbar from './components/Navbar';

// import axios from 'axios';

class App extends Component {
  /* TODO: password is also being passed back with the req. this needs to be removed. */

  render() {
    return (
      <>
        {/* <OurNavbar /> */}
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/eventsearch" component={EventSearch} />
          <Route exact path="/404" component={PageNotFound} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/event/:id" component={Event} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createevent" component={CreateEvent} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/scan" component={Scanner} />
        </>
      </>
    );
  } 
}

export default App;
