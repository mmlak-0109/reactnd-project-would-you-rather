import { Component } from "react";
import { FaRegSadCry, FaSignInAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


class NoMatch extends Component {
  state = {
    toHome: false
  }
  
  handleClick = (e) => {
    e.preventDefault()

    this.setState(() => ({
      toHome: true
    }))
  }
  render () {
    const { toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className='container center'>
        <FaRegSadCry size='10em'/>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <p>Please return to the login page</p>
        <div className='login-btn'>
          <button
            className='logout-btn'
            onClick={this.handleClick}
          >
            <span>Login</span>&nbsp;<FaSignInAlt />
          </button>
        </div>
      </div>
    )
  }
}

export default connect()(NoMatch)