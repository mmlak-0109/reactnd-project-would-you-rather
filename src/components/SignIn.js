import React, { Component } from "react";

class SignIn extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Welcome to the Would you Rather App!</h3>
          <p>Please sign in to continue</p>
        </div>
        <div>
          Sign In
          <form>
            <select>
              <option value='user1'>user1</option>
              <option value='user2'>user2</option>
              <option value='user3'>user3</option>
            </select>
          </form>
          <button>Sign In</button>
        </div>
      </div>
    )
  }
};

export default SignIn;