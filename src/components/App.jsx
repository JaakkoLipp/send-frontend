import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

// TODO: add .env address for backend

const App = () => {
  const [serviceAvailable, setServiceAvailable] = useState(true);
  const checkServiceStatus = async () => {
    try {
      const response = await axios.get("http://localhost:5000/");
      if (response.status === 200) {
        setServiceAvailable(true);
      } else {
        setServiceAvailable(false);
      }
    } catch (error) {
      setServiceAvailable(false);
      console.log(error);
    }
  };

  // status check interval effect
  useEffect(() => {
    checkServiceStatus();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Checking service status...");
      checkServiceStatus();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <hr />
        {serviceAvailable ? (
          <h3 style={{ color: "green" }}>Service Online</h3>
        ) : (
          <h3 style={{ color: "red" }}>Service Unavailable</h3>
        )}
      </div>
    </>
  );
};

export default App;
