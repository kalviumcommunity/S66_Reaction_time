import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEntity from "./components/AddEntity";
import FormPage from "./components/AddForm"
import Home from "./Home";
import Leaderboard from "./components/Form";
import "./app.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-entity" element={<AddEntity />} />  
          <Route path="/form" element={<FormPage/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
        </Routes>   
      </BrowserRouter>
    </>
  );
}

export default App; 