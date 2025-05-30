import Nav from "react-bootstrap/Nav";
import "./TopNavbar.css";
import { memo, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import { LanguageContext } from "../../LanguageContext";
import { useLocation } from "react-router-dom";

function TopNavbar() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();
  const location = useLocation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    changeLanguage(newLang);
  };

  return (
    <div className="navbartop">
      <Container fluid className="px-3">
        <div className="navbartop-grid">
          {/* Language - Left in LTR, Right in RTL */}
          <div
            className={`navbartop-item language-selector ${
              language === "fa" ? "order-3" : "order-1"
            } ps-3`}
          >
            <Nav.Link className="p-0">
              <select
                className="dropdown-lang"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="fa">فارسی</option>
              </select>
            </Nav.Link>
          </div>

          {/* Phone - Center (always) */}
          <div className="navbartop-item phone-info order-2">
            <span>{t("common.phone")}: 00989215178496</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#FFFFFF"
              className="ms-2"
            >
              <path d="M264-48q-29.7 0-50.85-21.15Q192-90.3 192-120v-720q0-29.7 21.15-50.85Q234.3-912 264-912h432q29.7 0 50.85 21.15Q768-869.7 768-840v720q0 29.7-21.15 50.85Q725.7-48 696-48H264Zm0-216v144h432v-144H264Zm215.79 108q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM264-336h432v-384H264v384Zm0-456h432v-48H264v48Zm0 528v144-144Zm0-528v-48 48Z" />
            </svg>
          </div>

          {/* Email - Right in LTR, Left in RTL */}
          <div
            className={`navbartop-item email-info ${
              language === "fa" ? "order-1" : "order-3"
            } pe-3`}
          >
            <span>{t("common.email")}: organji.mehdi@gmail.com</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#FFFFFF"
              className="ms-2"
            >
              <path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm312-240L168-611v347h624v-347L480-432Zm0-85 312-179H168l312 179Zm-312-94v-85 432-347Z" />
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default memo(TopNavbar);
