import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from "@coreui/react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
      <CContainer fluid>
        <CNavbarBrand to="/" as={Link}>
          5 Minute File Share
        </CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
            <CNavItem>
              <CNavLink to="/upload" as={Link}>
                Upload
              </CNavLink>
            </CNavItem>
            <CNavLink to="/download" as={Link}>
              Download
            </CNavLink>
          </CNavbarNav>
          <CNavbarNav className="bg-dark">
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle>Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="/login">Login</CDropdownItem>
                <CDropdownItem href="/register">Register</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="/logout">Log out</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;
