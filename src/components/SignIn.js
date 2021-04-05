import React, { Component } from "react";
import { connect } from 'react-redux'
import { FaUserCircle } from "react-icons/fa";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router";

class SignIn extends Component {
  state = {
    selection: 'Select a User...',
  }

  handleChange = (e) => {
    const selection = e.target.value

    this.setState(() => ({
      selection
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { selection } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(selection));

    this.setState(() => ({
      selection,
    }))
  }

  render() {
    const { userIds, users, signedIn } = this.props;
    const { selection } = this.state;

    if (signedIn) {
      return <Redirect push to='/' />
    }

    return (
      <div className='container center'>
        <div className='sign-in-top'  id='header'>
          <h3>Welcome to the Would you Rather App!</h3>
          <p>Please sign in to continue</p>
        </div>
        <div className='sign-in-bottom'>
          <div>
            {selection === 'Select a User...'
              ? <FaUserCircle size="10em" />
              : <img
                  className='avatar'
                  src={users[selection].avatarURL}
                  alt='User Avatar'
                />}
            <h2>Sign In</h2>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <select 
                className='user-select'
                value={selection}
                onChange={this.handleChange}>
                <option key='default'>Select a User...</option>
                {userIds.map((user) => (
                  <option key={user}>{user}</option>
                ))}
              </select>
              <button 
                className='btn'
                type='submit'
                disabled={selection === 'Select a User...'}>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
      userIds: Object.keys(state.users),
      users: state.users,
      signedIn: state.authedUser !== null
    }
}

export default connect(mapStateToProps)(SignIn);