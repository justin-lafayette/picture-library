import React, { Component } from 'react';
<<<<<<< HEAD
// import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
=======
import './App.css';
import { Route } from 'react-router-dom';

/* Pages */
>>>>>>> 37a080b4004ac7044fb675d71012fd51b9346a0b
import Home from './pages/Home';
import EventSearch from './pages/EventSearch';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import Event from './pages/Event';
import Login from './pages/Login';
import CreateEvent from './pages/CreateEvent';
import Upload from './pages/Upload'
import Scanner from './pages/Scan';

// import axios from 'axios';

class App extends Component {
  state= {
    email: "",
    isAuth: false

  }

  /* TODO: password is also being passed back with the req. this needs to be removed. */
  // componentDidMount() {
  //   console.log("app cDM");
  //   axios.get('/auth/isauth')
  //     .then( res => {
  //       console.log("email", this.state.email);
  //       console.log("isAuth", this.state.isAuth);
  //       if( res.data.user ) {
  //         console.log("res.data.user: true");
  //         this.setState({
  //           email: res.data.user.email,
  //           isAuth: true
  //         });
  //         console.log("email", this.state.email);
  //       console.log("isAuth", this.state.isAuth);
  //       } else {
  //         console.log("res.data.user: false");
  //         this.setState({
  //           email: null,
  //           isAuth: false
  //         })
  //         console.log("email", this.state.email);
  //       console.log("isAuth", this.state.isAuth);
  //         // this.props.history.push('/')
  //       }
  //       console.log("email", this.state.email);
  //       console.log("isAuth", this.state.isAuth);
  //     })
  // }

  render() {
    return (
      /* Removing router causes page to not render */
      // <Router>
        <>
          {/* <Switch> */}
          
            <Route exact path="/" component={Home} />
            <Route exact path="/eventsearch" component={EventSearch} />
            <Route exact path="/404" component={PageNotFound} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/event" component={Event} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/createevent" component={CreateEvent} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/scan" component={Scanner} />

            {/* <Route path="/" 
              render={(props) => <Home {...props} 
                email={this.state.email} 
                isAuth={this.state.isAuth}
              />}
            />

            <Route exact path="/eventsearch" 
              render={(props) => <EventSearch {...props} 
                email={this.state.email} 
                isAuth={this.state.isAuth}
              />}
            />

            <Route path="/404" render={(props) => <PageNotFound {...props} 
                email={this.state.email} 
                isAuth={this.state.isAuth}
              />}
            />

            <Route path="/profile" render={(props) => <Profile {...props} 
                email={this.state.email} 
                isAuth={this.state.isAuth}
              />}
            />

            <Route path="/event" render={(props) => <Event {...props} 
                email={this.state.email} 
                isAuth={this.state.isAuth}
              />} 
            />

            <Route path="/login" render={(props) => <Login {...props} 
                email={this.state.email} 
                isAuth={this.state.isAuth}
              />} 
            />

            <Route path="/createevent" render={(props) => <CreateEvent {...props} 
                email={this.state.email} 
                isAuth={this.state.isAuth}
              />} 
            /> */}
            
          {/* </Switch> */}
        </>
      // </Router>
    );
  } 
}

export default App;
