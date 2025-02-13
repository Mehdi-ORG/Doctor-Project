import "./panel.css";
import Navbar from "../navbar/Navbar";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

export const LanguageContext = createContext();

function Panel() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      Swal.fire({
        title: "دسترسی محدود!",
        text: "لطفا ابتدا وارد وبسایت شوید و یا ثبت نام کنید.",
        icon: "warning",
        confirmButtonText: "باشه",
      }).then(() => {
        navigate("/login");
      });
    } else {
      setIsAllowed(true);
    }
  }, [navigate]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };



  const ltrLanguages = ["en", "fr"];
  const direction = ltrLanguages.includes(i18n.language) ? "ltr" : "rtl";

  if (!isAllowed) return null;

  return (
    <LanguageContext.Provider value={changeLanguage}>
      <div>
     <Navbar/>
      <div className="panel-content" style={{ direction }}>
        <h1 className="text-center p-5">{t("welcome")}</h1>
        <p>{t("panelDescriptionLine1")}</p>
        <p>{t("panelDescriptionLine2")}</p>
        <p>{t("panelDescriptionLine3")}</p>
        <p>{t("panelDescriptionLine4")}</p>
        <p>{t("panelDescriptionLine5")}</p>
        <p>{t("panelDescriptionLine6")}</p>
        <p>{t("panelDescriptionLine7")}</p>
      </div>
    </div>
    </LanguageContext.Provider>
  );
}

export default Panel;
