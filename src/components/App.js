import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import NavBar from './NavBar';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <NavBar />
          <SignIn />
        </div>
      </Router>
    )
  }
};

export default App;