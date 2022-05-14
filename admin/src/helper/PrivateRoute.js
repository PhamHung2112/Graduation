import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { Path } from "../constants/path";

export function PrivateRoute(props) {
  const token = Cookies.get("cookieLogin");

  if (!token) {
    return <Redirect to={Path.LOGIN} />;
  }

  return <Route {...props} />;
}
