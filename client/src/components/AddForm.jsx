import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddForm.css"


const AddTime = () => {
  const [time, setTime] = useState("");
  const [player, setPlayer] = useState("");
  const navigate = useNavigate();

  const onTimeAdded = ()=>{
    alert("New Time added")
    setTime("");
    setPlayer("");
    navigate("/excuses")
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/add-excuse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ time, player }),
      });

      if (!response.ok) throw new Error("Failed to add time");

      const newTime = await response.json();
      console.log(newTime)
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
        placeholder="Time (min:sec:millisecond)"
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