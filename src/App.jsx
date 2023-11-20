import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SendEmail from "./pages/SendEmail";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import ManageStudent from "./pages/ManageStudent";
import ManageStandard from "./pages/ManageStandard";
import Settings from "./pages/Settings";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sendEmail" element={<SendEmail />}></Route>
        <Route path="/reset_password/:id/:token" element={<ResetPassword />}></Route>
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
      </Routes>
    </div>
  );
};

export default App;
