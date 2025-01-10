import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  CForm,
  CFormInput,
  CCard,
  CCardBody,
  CButton,
  CCol,
  CAlert,
  CCardFooter,
  CCardHeader,
} from "@coreui/react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Function to handle the registration form submission to backend
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Registration successful");
        navigate("/login");
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("Registration failed with error");
    }
  };

  // Render the registration form

  return (
    <CCol xs={12} sm={8} md={6} lg={4} className="mx-auto">
      <CCard>
        <CCardHeader>
          <h4>Login</h4>
        </CCardHeader>
        <CCardBody>
          {errorMessage && <CAlert color="danger">{errorMessage}</CAlert>}
          <CForm onSubmit={handleRegister}>
            <CFormInput
              type="email"
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-3"
            />
            <CFormInput
              type="password"
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mb-3"
            />
            <CButton type="submit" color="primary">
              Login
            </CButton>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <Link to="/register">Have an account already? Login here</Link>
        </CCardFooter>
      </CCard>
    </CCol>
  );
}

export default Register;
