import "./serviceCard.css";
import { memo } from "react";
import { useTranslation } from "react-i18next";

function ServiceCard({ iconS, title, textS }) {
  const { t } = useTranslation();

  return (
    <div data-aos="fade-up">
      <div className="bg-white rounded service-bgwhite">
        <div className="icon">{iconS}</div>
        <button className="a-link">
          <h3 className="mb-4">{t(title)}</h3>
        </button>
        <p className="matn text-center">{t(textS)}</p>
      </div>
    </div>
  );
}

export default memo(ServiceCard);
