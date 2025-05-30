import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import Logo from "../components/Logo/Logo";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <div className="footer-about">
              <Logo />
              <p className="mb-4">{t("footer.description")}</p>
            </div>
            <div className="social-links">
              <a href="#" className="me-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="me-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="me-2">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">{t("footer.usefulLinks")}</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/">{t("footer.home")}</Link>
              </li>
              <li className="mb-2">
                <Link to="/about">{t("footer.aboutUs")}</Link>
              </li>
              <li className="mb-2">
                <Link to="/services">{t("footer.services")}</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms">{t("footer.termsOfService")}</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy">{t("footer.privacyPolicy")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">{t("footer.ourServices")}</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/services/cardiology">{t("footer.cardiology")}</Link>
              </li>
              <li className="mb-2">
                <Link to="/services/neurology">{t("footer.neurology")}</Link>
              </li>
              <li className="mb-2">
                <Link to="/services/hepatology">{t("footer.hepatology")}</Link>
              </li>
              <li className="mb-2">
                <Link to="/services/pediatrics">{t("footer.pediatrics")}</Link>
              </li>
              <li className="mb-2">
                <Link to="/services/eye-care">{t("footer.eyeCare")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="text-uppercase mb-4">{t("footer.newsletter")}</h5>
            <p className="mb-4">{t("footer.newsletterDescription")}</p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder={t("footer.enterEmail")}
                aria-label="Email"
              />
              <button className="btn btn-primary" type="button">
                {t("footer.subscribe")}
              </button>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              © {new Date().getFullYear()} {t("footer.copyright")}.{" "}
              {t("footer.allRightsReserved")}
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              {t("footer.designedBy")}{" "}
              <a href="#">{t("footer.designerName")}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
