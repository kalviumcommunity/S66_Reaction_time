import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddForm.css";

const AddTime = () => {
  const [time, setTime] = useState("");
  const [player, setPlayer] = useState("");
  const navigate = useNavigate();

  // Function to convert sec:ms to total milliseconds
  const parseTime = (timeStr) => {
    const [sec, ms] = timeStr.split(":").map(Number); 
    return (sec * 1000) + ms; 
  };

  const onTimeAdded = () => {
    alert("New Time added");
    setTime("");
    setPlayer("");
    navigate("/leaderboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const totalMilliseconds = parseTime(time); 
      const response = await fetch("http://localhost:8001/time/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ time: totalMilliseconds, player }),
      });

      if (!response.ok) throw new Error("Failed to add time");

      const newTime = await response.json();
      console.log(newTime);
      onTimeAdded();
    } catch (error) {
      console.error("Error adding excuse:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Add New Time</h2>
      <input
        type="text"
        placeholder="Time (sec:ms)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Player (optional)"
        value={player}
        onChange={(e) => setPlayer(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Add Time
      </button>
    </form>
  );
};

export default AddTime;
