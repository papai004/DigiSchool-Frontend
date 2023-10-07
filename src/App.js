import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Admission from "./pages/Admission/Admission";
import Management from "./pages/Management";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
        <Route path="/management" element={<Management />}></Route>
      </Routes>
    </div>
  );
}

export default App;
