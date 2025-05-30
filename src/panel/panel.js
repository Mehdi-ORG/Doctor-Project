import "./panel.css";
import Navbar from "../navbar/Navbar";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import { LanguageContext } from "../LanguageContext";

function Panel() {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage, direction } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      Swal.fire({
        title: t("messages.accessDenied"),
        text: t("messages.pleaseLogin"),
        icon: "warning",
        confirmButtonText: t("common.ok"),
      });
      navigate("/login");
      return;
    } else {
      setIsAllowed(true);
    }
  }, [navigate, t]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  if (!isAllowed) return null;

  return (
    <div>
      <Navbar />
      <div className="panel-content" style={{ direction }}>
        <h1 className="text-center p-5">{t("common.welcome")}</h1>
        <p>{t("panelDescriptionLine1")}</p>
        <p>{t("panelDescriptionLine2")}</p>
        <p>{t("panelDescriptionLine3")}</p>
        <p>{t("panelDescriptionLine4")}</p>
        <p>{t("panelDescriptionLine5")}</p>
        <p>{t("panelDescriptionLine6")}</p>
        <p>{t("panelDescriptionLine7")}</p>
      </div>
    </div>
  );
}

export default Panel;
