import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import aboutImage from "../asset/image/about.jpg";
import "./About.css";

function AboutContent() {
  const { t } = useTranslation();

  return (
    <section className="about" aria-label="About Us">
      <Helmet>
        <title>{t("about.title")} | MediCare Plus</title>
        <meta name="description" content={t("about.description")} />
        <meta
          name="keywords"
          content="medical center, healthcare, doctors, services"
        />
        <meta property="og:title" content={t("about.title")} />
        <meta property="og:description" content={t("about.description")} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container-fluid px-5 bg-transparent">
        <div className="row align-items-center">
          <div className="col-lg-6 my-4 text-end" dir="rtl">
            <div className="px-3">
              <h1 className="fw-bold">{t("about.title")}</h1>
              <p>{t("about.description")}</p>
              <ul className="list-unstyled mt-5">
                <li className="mb-5">
                  <article className="d-flex align-items-start">
                    <i
                      className="fa-solid fa-flask-vial me-3 mt-2"
                      aria-hidden="true"
                    ></i>
                    <div>
                      <h2 className="fw-bold mb-2 h5">
                        {t("about.features.workDayNight.title")}
                      </h2>
                      <p>{t("about.features.workDayNight.description")}</p>
                    </div>
                  </article>
                </li>
                <li className="mb-5">
                  <article className="d-flex align-items-start">
                    <i
                      className="fa-solid fa-fire-extinguisher me-3 mt-2"
                      aria-hidden="true"
                    ></i>
                    <div>
                      <h2 className="fw-bold mb-2 h5">
                        {t("about.features.emergency.title")}
                      </h2>
                      <p>{t("about.features.emergency.description")}</p>
                    </div>
                  </article>
                </li>
                <li className="mb-5">
                  <article className="d-flex align-items-start">
                    <i
                      className="fa-solid fa-heart-circle-xmark me-3 mt-2"
                      aria-hidden="true"
                    ></i>
                    <div>
                      <h2 className="fw-bold mb-2 h5">
                        {t("about.features.dedicatedService.title")}
                      </h2>
                      <p>{t("about.features.dedicatedService.description")}</p>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 my-4">
            <div className="px-3">
              <img
                src={aboutImage}
                alt={t("about.imageAlt")}
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutContent);
