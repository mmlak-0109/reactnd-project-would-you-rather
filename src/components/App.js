import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import NavBar from './NavBar';
import SignIn from './SignIn';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

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

export default connect()(App);