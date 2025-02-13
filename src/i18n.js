import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Multilingual User Panel",
      panelDescriptionLine1:
        "Designed based on Bootstrap 5, Sass, Gulp, and Js",
      panelDescriptionLine2: "Light, dark, and system modes",
      panelDescriptionLine3: "Dozens of validated HTML templates with W3C",
      panelDescriptionLine4: "More than 50 reusable widgets",
      panelDescriptionLine5: "Fully documented and commented source code",
      panelDescriptionLine6: "Modern and creative design",
      panelDescriptionLine7:
        "Various programs and functional elements with reusability",
    },
  },
  fr: {
    translation: {
      welcome: "Panneau Utilisateur Multilingue",
      panelDescriptionLine1:
        "Conçu sur la base de Bootstrap 5, Sass, Gulp et Js",
      panelDescriptionLine2: "Modes clair, sombre et système",
      panelDescriptionLine3: "Des dizaines de modèles HTML validés avec W3C",
      panelDescriptionLine4: "Plus de 50 widgets réutilisables",
      panelDescriptionLine5: "Code source entièrement documenté et commenté",
      panelDescriptionLine6: "Design moderne et créatif",
      panelDescriptionLine7:
        "Divers programmes et éléments fonctionnels réutilisables",
    },
  },
  fa: {
    translation: {
      welcome: "پنل کاربری چندزبانه",
      panelDescriptionLine1: "طراحی شده بر اساس Bootstrap 5، Sass، Gulp و Js",
      panelDescriptionLine2: "حالت روشن، تاریک و سیستمی",
      panelDescriptionLine3: "ده ها طرح html اعتبار سنجی شده با W3C",
      panelDescriptionLine4: "بیش از 50 ابزارک قابل استفاده مجدد",
      panelDescriptionLine5: "سورس کد کاملاً مستند و دارای کامنت",
      panelDescriptionLine6: "طراحی مدرن و خلاقانه",
      panelDescriptionLine7:
        "دارای انواع برنامه و عناصر کاربردی با قابلیت استفاده مجدد",
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
