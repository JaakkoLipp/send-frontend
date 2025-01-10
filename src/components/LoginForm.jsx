import { Link } from "react-router-dom";
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

function LoginForm() {
  // TODO: Implement the login form and auth context, localstorage token

  return (
    <CCol xs={12} sm={8} md={6} lg={4} className="mx-auto">
      <CCard>
        <CCardHeader>
          <h4>Login</h4>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CFormInput
              type="email"
              id="email"
              label="Email"
              required
              className="mb-3"
            />
            <CFormInput
              type="password"
              id="password"
              label="Password"
              required
              className="mb-3"
            />
            <CButton type="submit" color="primary">
              Login
            </CButton>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <Link to="/register">Don&apos;t have an account? Register here</Link>
        </CCardFooter>
      </CCard>
    </CCol>
  );
}

export default LoginForm;
