import Home from "../src/pages/home"
import { Route, Routes } from "react-router-dom";
import './App.css';
import Men from "./pages/men";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        {/*<Route path="/patients/:patientID" element={<Patient />} />*/}
        {/*<Route path="/add" element={<AddPatient />} />*/}
      </Routes>
  );
}

export default App;
