import Navbar from "../navbar/Navbar";
import Card from "react-bootstrap/Card";
import Footer from "../footer/Footer";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "./Home.css";

function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  return (
    <main dir={isRTL ? "rtl" : "ltr"}>
      <Helmet>
        <title>{t("home.welcome")} | MediCare Plus</title>
        <meta name="description" content={t("home.welcomeSubtitle")} />
        <meta
          name="keywords"
          content="medical center, healthcare, doctors, services, hospital"
        />
        <meta property="og:title" content={t("home.welcome")} />
        <meta property="og:description" content={t("home.welcomeSubtitle")} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Navbar />
      <section className="bg" aria-label="Welcome Section">
        <div className="container py-4">
          <h1 className="fw-bold mb-3">{t("home.welcome")}</h1>
          <p className="h5 mb-4">{t("home.welcomeSubtitle")}</p>
        </div>
        <div className="container">
          <div className="row g-4">
            {/* Main Card */}
            <article className="col-12 col-md-12 col-lg-3">
              <div className="info-card h-100">
                <Card.Title className="fw-bold fs-4 mb-3">
                  {t("home.characteristics")}
                </Card.Title>
                <Card.Text className="card-text mb-4">
                  {t("home.characteristicsText")}
                </Card.Text>
                <button
                  className="btn btn-primary rounded-5 mt-auto"
                  aria-label={t("home.viewPortfolio")}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <i
                      className={`fa-solid ${
                        isRTL ? "fa-chevron-left" : "fa-chevron-right"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="ms-2">{t("home.viewPortfolio")}</span>
                  </div>
                </button>
              </div>
            </article>

            {/* Feature Cards */}
            <article className="col-12 col-md-4 col-lg-3">
              <div className="feature-card h-100">
                <div className="card-body">
                  <div className="font-icon mb-3" aria-hidden="true">
                    <i className="fa-regular fa-file-lines"></i>
                  </div>
                  <h2 className="fw-bold mb-3 h5">{t("home.contracts")}</h2>
                  <p className="card-text">{t("home.contractsText")}</p>
                </div>
              </div>
            </article>

            <article className="col-12 col-md-4 col-lg-3">
              <div className="feature-card h-100">
                <div className="card-body">
                  <div className="font-icon mb-3" aria-hidden="true">
                    <i className="fa-regular fa-gem"></i>
                  </div>
                  <h2 className="fw-bold mb-3 h5">{t("home.projects")}</h2>
                  <p className="card-text">{t("home.projectsText")}</p>
                </div>
              </div>
            </article>

            <article className="col-12 col-md-4 col-lg-3">
              <div className="feature-card h-100">
                <div className="card-body">
                  <div className="font-icon mb-3" aria-hidden="true">
                    <i className="fa-solid fa-vial-virus"></i>
                  </div>
                  <h2 className="fw-bold mb-3 h5">{t("home.laboratory")}</h2>
                  <p className="card-text">{t("home.laboratoryText")}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default memo(Home);
