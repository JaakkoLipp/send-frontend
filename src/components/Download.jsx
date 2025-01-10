import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const DownloadFile = () => {
  const [fileId, setFileId] = useState("");
  const [message, setMessage] = useState("");

  const handleFileIdChange = (e) => {
    setFileId(e.target.value);
  };

  const handleDownload = async () => {
    if (!fileId) {
      setMessage("Please enter a file ID.");
      return;
    }

    try {
      // Fetch the file using Axios
      const response = await axios.get(
        `http://localhost:5000/api/files/download/${fileId}`,
        {
          responseType: "blob", // Handle binary data
        }
      );

      // Extract the filename from the Content-Disposition header
      const contentDisposition = response.headers["content-disposition"];
      let filename = "downloaded-file"; // Default filename
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="?([^"]+)"?/);
        if (match && match[1]) {
          filename = match[1];
        }
      }

      // Create a download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename); // Use the extracted filename
      document.body.appendChild(link);
      link.click();

      setMessage(`File "${filename}" downloaded successfully!`);
    } catch (error) {
      console.error(error);
      setMessage(
        "Error downloading file. Please check the file ID or try again."
      );
    }
  };
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
        <h2>Download File</h2>
        <input
          type="text"
          placeholder="Enter File ID"
          value={fileId}
          onChange={handleFileIdChange}
        />
        <button onClick={handleDownload}>Download</button>
        <p>{message}</p>
      </div>
    </>
  );
};

export default DownloadFile;
