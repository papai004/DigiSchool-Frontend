import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Students from "./components/pages/Students";
import Admission from "./components/pages/Admission";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
      </Routes>
    </div>
  );
}

export default App;
