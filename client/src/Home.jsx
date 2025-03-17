import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Button from "./components/Button-component";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8001/")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Home-container">
      <h1>Welcome to Reaction Time Tester</h1>
      {/* Display fetched API data */}
      {data && data.message && (
        <div className="api-data">
          <p>Message: {data.message}</p>
        </div>
      )}

      <div className="reaction-time-tester">
        <Button />
        <button className="leaderboard-button" onClick={() => navigate("/leaderboard")}>
          View Leaderboard
        </button>
      </div>
    </div>
  );
}

export default Home;
