import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import EventSearch from './pages/EventSearch';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import Event from './pages/Event';
import Login from './pages/Login';
import CreateEvent from './pages/CreateEvent';
import axios from 'axios';

class App extends Component {
  state= {
    email: "test",
    auth: true

  }

  componentDidMount() {
    axios.get('/auth/isauth')
      .then( res => {
        if( res.data.user ) {
          this.setState({
            email: this.data.user.email,
            auth: true
          });
        } else {
          this.setState({
            email: null,
            auth: false
          })
          this.props.history.push('/')
        }
      })
  }

  render() {
    return (
      /* Removing router causes page to not render */
      <Router>
        <>
          <Switch>
          
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/" 
              render={(props) => <Home {...props} email={this.state.email} auth={this.state.auth} }
            /> */}
            <Route exact path="/eventsearch" component={EventSearch} />
            <Route exact path="/404" component={PageNotFound} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/event" component={Event} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/createevent" component={CreateEvent} />
            
          </Switch>
        </>
      </Router>
    );
  } 
}

export default App;
