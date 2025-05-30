// کانتکست مدیریت زبان برنامه
import { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// ایجاد کانتکست برای مدیریت زبان
export const LanguageContext = createContext();

// کامپوننت ارائه‌دهنده کانتکست زبان
export const LanguageProvider = ({ children }) => {
  // استفاده از هوک ترجمه
  const { i18n } = useTranslation();
  const LANGUAGE_KEY = "language"; // کلید ثابت برای localStorage

  // تنظیم زبان پیش‌فرض از localStorage یا انگلیسی
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem(LANGUAGE_KEY);
    if (savedLang) {
      console.log("در حال بارگذاری زبان ذخیره شده:", savedLang);
      i18n.changeLanguage(savedLang);
      return savedLang;
    }
    console.log("تنظیم زبان پیش‌فرض به انگلیسی");
    localStorage.setItem(LANGUAGE_KEY, "en");
    i18n.changeLanguage("en");
    return "en";
  });

  // تغییر زبان در i18n هنگام تغییر state زبان
  useEffect(() => {
    console.log("زبان به این تغییر کرد:", language);
    console.log("قبل از تغییر زبان در i18n:", i18n.language);
    i18n.changeLanguage(language).then(() => {
      console.log("بعد از تغییر زبان در i18n:", i18n.language);
      console.log(
        "ترجمه‌های موجود:",
        i18n.getResourceBundle(language, "translation")
      );
    });
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language, i18n]);

  // تابع تغییر زبان و ذخیره آن در localStorage
  const changeLanguage = (lang) => {
    console.log("در حال تغییر زبان به:", lang);
    console.log("زبان فعلی:", language);
    setLanguage(lang);
  };

  const ltrLanguages = ["en", "fr"];
  const direction = ltrLanguages.includes(language) ? "ltr" : "rtl";

  // ارائه مقادیر زبان و تابع تغییر آن به کامپوننت‌های فرزند
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, direction }}>
      <div style={{ direction }}>{children}</div>
    </LanguageContext.Provider>
  );
};
