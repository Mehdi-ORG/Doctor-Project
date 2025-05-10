import "./BottomNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { memo, useEffect, useState } from "react";

function BottomNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <div className="d-flex justify-content-around align-items-center user-select-none bottomNav sticky-top shadow-sm">
        <div className="d-flex ">
          
          <div className="Nav order-lg-3 ">
            <Navbar expand="lg">
              <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="nav-back">
                    <NavLink to="/" className="mx-3 nav-link">
                      Home
                    </NavLink>
                    <NavLink to="/about" className="mx-3 nav-link">
                      About
                    </NavLink>
                    <NavLink to="/service" className="mx-3 nav-link">
                      Service
                    </NavLink>
                    <NavLink to="/panel" className="mx-3 nav-link">
                      Panel
                    </NavLink>
                    <NavDropdown
                      title="items"
                      id="navbarScrollingDropdown"
                      className="mx-3 nav-drop-item"
                    >
                      <NavDropdown.Item as={Link} to="/gallery">
                        Gallery
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/doctors">
                        Doctors
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
        <div className="label">
          {!isLoggedIn ? (
            <NavLink
              className={({ isActive }) =>
                isActive ? "login navlink active-link" : "login navlink"
              }
              to="/login"
            >
              Login
            </NavLink>
          ) : (
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default memo(BottomNavbar);
