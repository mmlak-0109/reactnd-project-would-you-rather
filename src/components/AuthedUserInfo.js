import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

class AuthedUserInfo extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    const resetAuthedUser = null

    dispatch(setAuthedUser(resetAuthedUser))
  }

  render() {
    const { user } = this.props;

    if (user === undefined) {
      return null
    }
    
    return (
      <div>
        <p>Hello, {user.name}</p>
        <img 
          src={user.avatarURL}
          alt="User Avatar">
        </img>
        <a 
          href='/sign-in'
          onSubmit={this.handleSubmit}>
            Logout
        </a>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.users[state.authedUser]
  }
}

export default connect(mapStateToProps)(AuthedUserInfo)