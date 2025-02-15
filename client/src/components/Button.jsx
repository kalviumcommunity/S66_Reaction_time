const ReactionButton = ({ onClick, reactionTime }) => {
        return (
        <button 
            onClick={onClick} 
            style={{
            padding: "15px 30px",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "0.3s",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#45a049"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"}
        >
            {reactionTime ? `Your time: ${reactionTime} ms` : "Start"}
        </button>
        );
    };
    
    export default ReactionButton;