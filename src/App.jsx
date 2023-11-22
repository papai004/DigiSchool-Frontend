import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import ManageStudent from "./pages/ManageStudent";
import ManageStandard from "./pages/ManageStandard";
import Settings from "./pages/Settings";
import PrivateRoute from "./components/PrivateRoute";
import PageNotFound from "./pages/404";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reset_password/:token" element={<ResetPassword />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/manage_student"
          element={
            <PrivateRoute>
              <ManageStudent />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/manage_standard"
          element={
            <PrivateRoute>
              <ManageStandard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
