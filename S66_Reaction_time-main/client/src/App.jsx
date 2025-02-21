import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEntity from "./components/AddEntity";
import Home from "./Home";
import "./app.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-entity" element={<AddEntity />} />
        </Routes>   
      </BrowserRouter>
    </>
  );
}

export default App;