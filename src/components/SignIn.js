import React, { Component } from "react";
import { connect } from 'react-redux'
import { FaUserCircle } from "react-icons/fa";

class SignIn extends Component {
  render() {
    const { users } = this.props;
    console.log(users)
    return (
      <div className='container center'>
        <div className='sign-in'>
          <h3>Welcome to the Would you Rather App!</h3>
          <p>Please sign in to continue</p>
        </div>
        <div className='sign-in'>
          <div>
            <FaUserCircle size="10em"/>
            <h2>Sign In</h2>
          </div>
          <div>
            <form>
              <select className='user-select'>
                {users.map((user) => (
                  <option id={user}>{user}</option>
                ))}
              </select>
            </form>
            <button className='btn'>Sign In</button>
          </div>
        </div>
      </div>
    )
  }
};

function mapStateToProps({ users }) {
  return {
      users: Object.keys(users)
  }
}

export default connect(mapStateToProps)(SignIn);