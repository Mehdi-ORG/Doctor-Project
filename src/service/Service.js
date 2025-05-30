import { useEffect, memo } from "react";
import Navbar from "../navbar/Navbar";
import "./Service.css";
import Aos from "aos";
import Department from "../department/Department";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "../components/counterCard/serviceCard";
import { serviceData } from "../serviceData";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

function Service() {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <Helmet>
        <title>{t("service.title")} | MediCare Plus</title>
        <meta name="description" content={t("service.description")} />
        <meta
          name="keywords"
          content="medical services, healthcare, hospital services, medical care, patient care"
        />
        <meta property="og:title" content={t("service.title")} />
        <meta property="og:description" content={t("service.description")} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Navbar />
      <section className="py-4" aria-label="Medical Services">
        <header className="div-header">
          <h1>{t("service.title")}</h1>
          <p>{t("service.description")}</p>
        </header>
        <Container>
          <Row lg={3} md={2} xs={1}>
            {serviceData.map((service) => (
              <Col key={service.id}>
                <article>
                  <ServiceCard
                    iconS={service.iconS}
                    title={`service.services.${service.id}.title`}
                    textS={`service.services.${service.id}.description`}
                  />
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Department />
    </main>
  );
}

export default memo(Service);
