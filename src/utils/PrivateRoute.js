import { Redirect, Route } from "react-router";


export default function PrivateRoute(props) {
  const { path, exact, component: Component, signedin } = props;

  return (
    <Route exact={exact} path={path}>
      {signedin ? <Component /> : <Redirect to='/sign-in' />}
    </Route>
  )
}