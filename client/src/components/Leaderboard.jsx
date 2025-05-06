import "./Leaderboard.css";

// Function to convert milliseconds to sec:ms format
const formatTime = (timeInMs) => {
  const seconds = Math.floor(timeInMs / 1000); 
  const milliseconds = timeInMs % 1000; 

  return `${seconds}:${milliseconds < 100 ? "0" : ""}${milliseconds}`;
};

const LeaderboardList = ({ times }) => {
  console.log("Received Times in LeaderboardList:", times); // Debugging

  return (
    <div className="leaderboard-list">
      {times.length > 0 ? (
        times.map((time, index) => (
          <div key={time._id} className="leaderboard-entry">
            <span className="rank">#{index + 1}</span>
            <h3 className="reaction-time">
              {formatTime(time.time)} {/* Convert and display time */}
            </h3>
            <p className="player-name">- {time.name || "Anonymous"}</p>
          </div>
        ))
      ) : (
        <p className="no-times">No reaction times recorded yet.</p>
      )}
    </div>
  );
};

export default LeaderboardList;
