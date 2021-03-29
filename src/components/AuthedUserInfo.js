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

    const authedUserImg = {
      borderRadius: '50%',
      backgroundImage: user === undefined ? 'none' : `url(/${user.avatarURL})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    if (user === undefined) {
      return null
    }
    
    return (
      <div className='authed-user'>
        <ul>
          <li>
            <span>{user.name}</span>
          </li>
          <li style={authedUserImg}>
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