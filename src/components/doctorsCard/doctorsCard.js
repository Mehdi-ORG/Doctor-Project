import "./doctorsCard.css";
import { memo } from "react";
import { useTranslation } from "react-i18next";

function DoctorsCard({ name, expertise, textD, image }) {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="doctor-div">
        <div>
          <img
            src={image}
            alt={t("common.doctorImage")}
            className="img-fluid doctor-img"
          />
        </div>
        <div className="doctor-text1">
          <h4>{t(name)}</h4>
          <p>{t(expertise)}</p>
          <hr />
          <p>{t(textD)}</p>
          <div className="doctor-icon">
            <i
              className="fa-brands fa-x-twitter"
              title={t("common.twitter")}
            ></i>
            <i
              className="fa-brands fa-facebook"
              title={t("common.facebook")}
            ></i>
            <i
              className="fa-brands fa-instagram"
              title={t("common.instagram")}
            ></i>
            <i
              className="fa-brands fa-linkedin"
              title={t("common.linkedin")}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(DoctorsCard);
