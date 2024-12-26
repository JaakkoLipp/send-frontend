import { useEffect, useState } from "react";
import axios from "axios";
import UploadFile from "./Upload";
import DownloadFile from "./Download";

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
    <div>
      <h1>5 Minute File Share</h1>
      {!serviceAvailable && (
        <h3 style={{ color: "red" }}>Service Unavailable</h3>
      )}
      <UploadFile />
      <hr />
      <DownloadFile />
    </div>
  );
};

export default App;
