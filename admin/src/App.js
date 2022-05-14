import { Switch } from "react-router-dom";
import LoginPage from "./components/Login/Login";
import { Path } from "./constants/path";
import { AuthRoute } from "./helper/AuthRoute";
import { PrivateRoute } from "./helper/PrivateRoute";
import AdminLayout from "./layout/AdminLayout";

function App() {
  return (
    <Switch>
      <AuthRoute path={Path.LOGIN} exact>
        <LoginPage />
      </AuthRoute>

      <PrivateRoute path="/">
        <AdminLayout />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
