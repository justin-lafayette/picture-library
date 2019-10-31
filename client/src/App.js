

import React/* , { Component } */ from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import Upload from "./components/Upload";


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
