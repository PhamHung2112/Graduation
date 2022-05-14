import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { Path } from "../constants/path";

export function AuthRoute(props) {
  const token = Cookies.get("cookieLogin");

  if (token) {
    return <Redirect to={Path.HOME_PAGE} />;
  }

  return <Route {...props} />;
}
