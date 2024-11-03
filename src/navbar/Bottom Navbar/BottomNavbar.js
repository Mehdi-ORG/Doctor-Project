import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./BottomNavbar.css";
import { Link, NavLink } from "react-router-dom";

function BottomNavbar() {
  return (
    <>
      <div className="d-flex justify-content-around align-items-center user-select-none bottomNav sticky-top shadow-sm">
        <div className="d-flex ">
          <div className="appointment d-none d-sm-flex order-2">
            <Navbar.Brand>appointment</Navbar.Brand>
          </div>
          <div className="Nav order-lg-3 ">
            <Navbar expand="lg" >
              <Container fluid >
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav  className="nav-back">
                    <NavLink to='/' className="mx-3 nav-link">Home</NavLink>
                    <NavLink to='/about' className="mx-3 nav-link">About</NavLink>
                    <NavLink to="/service" className="mx-3 nav-link">Service</NavLink>
                    <NavDropdown title="items" id="navbarScrollingDropdown" className="mx-3 nav-drop-item">
                      <NavDropdown.Item as={Link} to='/gallery'>
                        Gallery
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to='/doctors'>
                        Doctors
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
        <div className="label ">
          <NavLink className={({isActive})=>isActive? 'login navlink active-link' : "login navlink"} to="/login"> Login</NavLink>
        </div>
      </div>
    </>
  );
}
export default BottomNavbar;
