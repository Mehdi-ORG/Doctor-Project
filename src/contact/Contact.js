import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <main>
      <Helmet>
        <title>{t("contact.title")} | MediCare Plus</title>
        <meta name="description" content={t("contact.description")} />
        <meta
          name="keywords"
          content="contact us, medical center contact, healthcare contact, appointment booking"
        />
        <meta property="og:title" content={t("contact.title")} />
        <meta property="og:description" content={t("contact.description")} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Navbar />
      <section className="contact py-5" aria-label="Contact Information">
        <div className="container">
          <header className="section-header text-center mb-5">
            <h1>{t("contact.title")}</h1>
            <p>{t("contact.description")}</p>
          </header>

          <div className="row gy-5">
            <div className="col-lg-4">
              <div className="info-item">
                <i className="bi bi-geo-alt" aria-hidden="true"></i>
                <h2>{t("contact.address.title")}</h2>
                <p>{t("contact.address.description")}</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info-item">
                <i className="bi bi-envelope" aria-hidden="true"></i>
                <h2>{t("contact.email.title")}</h2>
                <p>
                  <a
                    href="mailto:organji.mehdi@gmail.com"
                    aria-label={t("contact.email.description")}
                  >
                    organji.mehdi@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info-item">
                <i className="bi bi-telephone" aria-hidden="true"></i>
                <h2>{t("contact.phone.title")}</h2>
                <p>
                  <a
                    href="tel:00989215178496"
                    aria-label={t("contact.phone.description")}
                  >
                    00989215178496
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <article className="php-email-form">
                <header>
                  <h2>{t("contact.form.title")}</h2>
                  <p>{t("contact.form.description")}</p>
                </header>
                <form>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label htmlFor="name" className="visually-hidden">
                        {t("contact.form.name")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder={t("contact.form.name")}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="visually-hidden">
                        {t("contact.form.email")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder={t("contact.form.email")}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="subject" className="visually-hidden">
                        {t("contact.form.subject")}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-control"
                        placeholder={t("contact.form.subject")}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="message" className="visually-hidden">
                        {t("contact.form.message")}
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="6"
                        placeholder={t("contact.form.message")}
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-primary">
                        {t("contact.form.send")}
                      </button>
                    </div>
                  </div>
                </form>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default memo(Contact);
