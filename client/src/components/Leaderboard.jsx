import "./Leaderboard.css";

const LeaderboardList = ({ times }) => {
  console.log("Received Times in LeaderboardList:", times); // Debugging

  return (
    <div className="leaderboard-list">
      {times.length > 0 ? (
        times.map((time, index) => (
          <div key={time._id} className="leaderboard-entry">
            <span className="rank">#{index + 1}</span>
            <h3 className="reaction-time">{time.time} ms</h3>
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
