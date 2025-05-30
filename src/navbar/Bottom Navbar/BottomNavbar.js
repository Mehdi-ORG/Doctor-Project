import "./BottomNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { memo, useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../LanguageContext";
import Logo from "../../components/Logo/Logo";

function BottomNavbar() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useContext(LanguageContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bottomNav sticky-top shadow-sm">
      <Container fluid className="px-3">
        <div className="d-flex justify-content-between align-items-center">
          {/* بخش لوگو - سمت راست */}
          <div
            className={`navbar-brand-section ${
              language === "fa" ? "pe-3" : "ps-3"
            }`}
          >
            <Navbar.Brand as={Link} to="/">
              <Logo />
            </Navbar.Brand>
          </div>

          {/* دکمه همبرگر منو */}
          <button
            className={`navbar-toggler ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* بخش لینک‌ها - وسط */}
          <div className={`navbar-links-section ${isMenuOpen ? "show" : ""}`}>
            <NavLink
              to="/"
              className="mx-3 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.home")}
            </NavLink>
            <NavLink
              to="/about"
              className="mx-3 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.about")}
            </NavLink>
            <NavLink
              to="/service"
              className="mx-3 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.services")}
            </NavLink>
            <NavLink
              to="/panel"
              className="mx-3 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.profile")}
            </NavLink>
            <NavDropdown
              title={t("navigation.items")}
              id="navbarScrollingDropdown"
              className="mx-3 nav-drop-item"
            >
              <NavDropdown.Item
                as={Link}
                to="/gallery"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.gallery")}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/doctors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.doctors")}
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          {/* بخش login - سمت چپ */}
          <div
            className={`navbar-auth-section ${
              language === "fa" ? "ps-3" : "pe-3"
            }`}
          >
            {!isLoggedIn ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "login navlink active-link" : "login navlink"
                }
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("common.login")}
              </NavLink>
            ) : (
              <button className="logout-button" onClick={handleLogout}>
                {t("common.logout")}
              </button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default memo(BottomNavbar);
