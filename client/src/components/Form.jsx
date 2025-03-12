import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Leaderboard = () => {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchTimes = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/times"); 
      if (!res.ok) throw new Error("Failed to fetch reaction times");
      const data = await res.json();
      setTimes(data);
    } catch (err) {
      console.error("Error fetching reaction times:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTimes();
  }, []);

//   const addTimeToList = (newTime) => {
//     setTimes((prev) => [newTime, ...prev]); 
//   };

if (loading)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Loading reaction times...</p>
      </div>
    );

  return (
    <div className="leaderboard-container">
      <button
        onClick={() => navigate("/form")}
        className="add-time-button"
      >
        Add New Reaction Time
      </button>
  
      {times.map((time) => (
        <div key={time._id} className="leaderboard-entry">
          <h3>{time.reactionTime} ms</h3>
          <p>- {time.player || "Anonymous"}</p>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
