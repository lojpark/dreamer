import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Album from './components/album/Album';
import Register from './components/register/Register'
import Appbar from './components/layout/Appbar'
import SignIn from './components/signin/SignIn'
import Profile from './components/profile/Profile'

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Appbar />
          <Switch>
            <Route exact path = "/" component={Album} />  
            <Route exact path = "/register" component={Register} />
            <Route exact path = "/signin" component={SignIn} />
            <Route exact path = "/profile" component={Profile} />

          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
