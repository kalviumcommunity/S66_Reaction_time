import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Leaderboard from "./Leaderboard";
import "./Form.css";

const leaderboard = () => {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch reaction times from the backend
  useEffect(() => {
    const fetchTimes = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8001/time/");
        if (!res.ok) throw new Error("Failed to fetch reaction times");
        const data = await res.json();
        console.log(data);
        setTimes(data);
      } catch (err) {
        console.error("Error fetching reaction times:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTimes();
  }, []);

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-heading">🏆 Reaction Time Leaderboard</h2>

      <button onClick={() => navigate("/form")} className="add-time-button">
        ➕ Add New Reaction Time
      </button>

      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="loading-text">Fetching reaction times...</p>
        </div>
      ) : (
        <Leaderboard times={times} />
      )}
    </div>
  );
};

export default leaderboard;
