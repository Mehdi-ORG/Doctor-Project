import { useEffect, useState, memo } from "react";
import Navbar from "../navbar/Navbar";
import "./Service.css";
import Aos from "aos";
import Department from "../department/Department";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "../components/counterCard/serviceCard";
import {serviceData} from '../serviceData'

function Service() {
  const [serviceInfo, setServiceInfo] = useState(serviceData);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <section className="py-4">
        <div className="div-header">
          <h1 className="px-3">خدمات</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <Container>
          <Row lg={3} md={2} xs={1}>
            {serviceInfo.map((services) => (
              <Col>
                <ServiceCard {...services} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Department />
    </>
  );
}

export default memo(Service);
