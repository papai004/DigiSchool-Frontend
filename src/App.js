import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
<<<<<<< HEAD
import Manage from "./pages/Manage";
import Actions from "./pages/Actions";
import Settings from "./pages/Settings";
=======
import Students from "./pages/Students";
import Admission from "./pages/Admission/Admission";
import Management from "./pages/Management";
>>>>>>> 3be7734d0129e8a924807ebc1b65560d87bfb4a7

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
<<<<<<< HEAD
        <Route path="/manage" element={<Manage />}></Route>
        <Route path="/actions" element={<Actions />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/logout" element={<logout />}></Route>
=======
        <Route path="/students" element={<Students />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
        <Route path="/management" element={<Management />}></Route>
>>>>>>> 3be7734d0129e8a924807ebc1b65560d87bfb4a7
      </Routes>
    </div>
  );
}

export default App;
