import { createRoot } from "react-dom/client";
//import "./index.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import App from "./components/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./components/Upload";
import Download from "./components/Download";
import LoginForm from "./components/LoginForm.jsx";
import Register from "./components/Register";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/download" element={<Download />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
