import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ManageStudent from "./pages/ManageStudent";
import ManageStandard from "./pages/ManageStandard";
import Actions from "./pages/Actions";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/manageStudent" element={<ManageStudent />}></Route>
        <Route path="/manageStandard" element={<ManageStandard />}></Route>
        <Route path="/actions" element={<Actions />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/logout" element={<logout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
