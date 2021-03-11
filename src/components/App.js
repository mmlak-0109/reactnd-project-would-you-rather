import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom' 
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import NavBar from './NavBar';
import SignIn from './SignIn';
import AuthedUserInfo from './AuthedUserInfo';
import Home from './Home';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props;

    return (
      <Router>
        <Fragment>
          <div className='container'>
            <div className='nav-authedUser'>
              <NavBar />
              <AuthedUserInfo />
            </div>
            {/* TODO: This switch statement isn't working on refresh... */}
            <Switch>
              <div>
                <Route exact path='/' render={() => {
                  return (
                    authedUser === null
                      ? <Redirect to='/sign-in' />
                      : <Redirect to='/home' />
                  )
                }} />
                <Route path='/sign-in' exact component={SignIn} />
                <Route path='/home' exact component={Home} />
                {/* <Route path='/leaderboard' exact component={} />
                <Route path='/new-question' exact component={} />
                <Route path='/question/:id' exact component={} />
                <Route path='/answer/:id' exact component={} /> */}
              </div>
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
};

function mapStateToProps(state) {
  return {
    users: state.users,
    authedUser: state.authedUser}
  }

export default connect(mapStateToProps)(App);