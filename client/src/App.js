import React, { Component } from 'react';
// import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import MainPage from "./components/MainPage";
// import logo from './logo.svg';  


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container"> 
          <Switch>
            <Route exact path="/" component = {Login} />
            {/* <Route exact path="/private/:id" component={PrivateProfile} /> */}
            {/* <Route exact path='/public/:id' component={PublicProfile} /> */}
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/admin/util" component={UtilPage} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
