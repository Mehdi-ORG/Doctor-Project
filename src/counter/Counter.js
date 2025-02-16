import { useEffect, memo } from "react";
import "./Counter.css";
import * as PureCounter from "@srexi/purecounterjs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row, Container } from "react-bootstrap";
import CounterCard from "../components/counterCard";
import { counterInfo } from "../data"; // مستقیم روی همین ها مپ زدیم

function Counter() {
  useEffect(() => {
    if (typeof PureCounter === "function") {
      new PureCounter();
    }
    AOS.init();
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} className="gy-5">
        {counterInfo.map((counter) => (
          <Col key={counter.id}>
            <CounterCard {...counter} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default memo(Counter);
