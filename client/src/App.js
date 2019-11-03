import React/* , { Component } */ from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import EventSearch from './pages/EventSearch';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import Event from './pages/Event';
import Login from './pages/Login';
import HooksProfile from './pages/HooksProfile';
import CreateEvent from './pages/CreateEvent';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/eventsearch" component={EventSearch} />
          <Route exact path="/404" component={PageNotFound} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/hooksprofile" component={HooksProfile} />
          <Route exact path="/createevent" component={CreateEvent} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
