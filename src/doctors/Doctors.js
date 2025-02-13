import "./Doctors.css";
import Navbar from "../navbar/Navbar";
import doctor1 from "../asset/image/doctors/doctors-1.jpg";
import doctor2 from "../asset/image/doctors/doctors-2.jpg";
import doctor3 from "../asset/image/doctors/doctors-3.jpg";
import doctor4 from "../asset/image/doctors/doctors-4.jpg";
import { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DoctorsCard from "../components/doctorsCard/doctorsCard";

function Doctors() {
  const doctorInfo = [
    {
      id: 1,
      image: doctor1,
      name: "دکتر خشایار احمدی",
      expertise: "جراح مغز و اعصاب",
      textD: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    },
    {
      id: 2,
      image: doctor2,
      name: "دکتر نیلوفر پاکزاد",
      expertise: "پزشک زنان و زایمان",
      textD: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    },
    {
      id: 3,
      image: doctor3,
      name: "دکتر داریوش بزرگمهر",
      expertise: "جراح قلب و عروق",
      textD: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    },
    {
      id: 4,
      image: doctor4,
      name: "دکتر پرستو حقیقی",
      expertise: "جراح ارتوپد",
      textD: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="doctor-section">
        <div className="doctor-header">
          <h3>دکتر ها</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <Container fluid style={{ backgroundColor: "white" }}>
          <Row xs={1} lg={2}>
            {doctorInfo.map((doctors) => (
              <Col key={doctors.id} className="g-3">
                <DoctorsCard {...doctors} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default memo(Doctors);
