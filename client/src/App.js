import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import About from './pages/about';
import Home from './pages/home';
import ManageMembers from './pages/manageMembers';
import Members from './pages/members';
import Profile from './pages/profile';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/manage" component={ManageMembers} />
            <Route exact path="/:id" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;