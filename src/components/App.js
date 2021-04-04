import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import NavBar from './NavBar';
import SignIn from './SignIn';
import AuthedUserInfo from './AuthedUserInfo';
import Home from './Home';
import NewQuestion from './NewQuestion';
import PrivateRoute from '../utils/PrivateRoute'
import Leaderboard from './Leaderboard';
import QuestionAnswer from './QuestionAnswer';
import NoMatch from './NoMatch';
import LoadingBar from 'react-redux-loading-bar'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { signedIn, loading } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <div className='nav-authedUser'>
              <NavBar />
              <AuthedUserInfo />
            </div>
            {loading
              ? null
              : <Switch>
                  <div>
                    <PrivateRoute path='/' exact component={Home} signedin={signedIn} />
                    <PrivateRoute path='/add' exact component={NewQuestion} signedin={signedIn} />
                    <PrivateRoute path='/leaderboard' exact component={Leaderboard} signedin={signedIn} />
                    <PrivateRoute path='/question/:id' exact component={QuestionAnswer} signedin={signedIn} />
                    <Route path='/sign-in' exact component={SignIn} />
                    <Route path='/no-match' exact component={NoMatch} />
                  </div>
                </Switch>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
};

function mapStateToProps(state) {
  return {
    signedIn: state.authedUser !== null,
    loading: state.loadingBar.default === 1,
  }
}

export default connect(mapStateToProps)(App);