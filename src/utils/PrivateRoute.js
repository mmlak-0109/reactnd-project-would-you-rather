import { Component } from "react";
import { Redirect, Route, withRouter } from "react-router";


class PrivateRoute extends Component {
  render() {
    const { path, exact, component, signedin } = this.props;
    
    if (signedin) {
      return <Route exact={exact} path={path} component={component} />
    } else {
      return <Redirect to='/sign-in' />
    }
  }
}

export default withRouter(PrivateRoute)