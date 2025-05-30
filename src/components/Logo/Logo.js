import React from "react";
import { useTranslation } from "react-i18next";
import "./Logo.css";

const Logo = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  return (
    <div className="logo" dir={isRTL ? "rtl" : "ltr"}>
      <div className="logo-symbol">
        <span className="logo-m">M</span>
      </div>
      <div className="logo-text">
        <span className="logo-text-main">MediCare</span>
        <span className="logo-text-sub">Plus</span>
      </div>
    </div>
  );
};

export default Logo;
