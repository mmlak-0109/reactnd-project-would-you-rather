import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import { FaSignOutAlt } from "react-icons/fa";

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
      <div className='authed-user'>
        <ul>
          <li>
            <span>Hello, {user.name} </span>
          </li>
          <li>
            <img 
              src={user.avatarURL}
              alt="User Avatar">
            </img>
          </li>
          <li>
            <button
              onClick={this.handleSubmit}
              className='logout-btn'>
                <span>Logout</span>&nbsp;<FaSignOutAlt />
            </button>
          </li>
        </ul>
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