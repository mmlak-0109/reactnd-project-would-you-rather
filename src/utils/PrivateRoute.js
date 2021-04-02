import { Redirect, Route } from "react-router";

export default function PrivateRoute(props) {
  const { path, exact, component: Component, signedin } = props;
  
  return(
    <Route exact={exact} path={path} render={routeProps => (
      signedin
        ? <Component {...routeProps}/>
        : <Redirect to='/sign-in' />
    )} />
  )
}