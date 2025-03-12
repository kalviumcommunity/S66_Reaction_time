import { useEffect , useState } from "react";
import "./Home.css";
import Button from "./components/Button-component";

function Home() {

  const [data , setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/")
    .then((res) => res.json())
    .then((data) =>{
      console.log("Fetched Data:", data);
      setData(data);
    })
    .catch((error) => console.log(error))
  }, []);

  return (
    <div className="Home-container">
      <h1>Welcome to Reaction Time Tester</h1>
      {/* Display fetched API data */}
      {data ? (
        <div className="api-data">
          <p>Message: {data.message}</p>
          <p>Database Status: {data.dbStatus}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className="reaction-time-tester">
        <Button />
      </div>
    </div>
  );
}

export default Home;
