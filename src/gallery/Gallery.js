import Navbar from "../navbar/Navbar";
import "./Gallery.css";
import image1 from "../asset/image/gallery/gallery-1.jpg";
import image2 from "../asset/image/gallery/gallery-2.jpg";
import image3 from "../asset/image/gallery/gallery-3.jpg";
import image4 from "../asset/image/gallery/gallery-4.jpg";
import image5 from "../asset/image/gallery/gallery-5.jpg";
import image6 from "../asset/image/gallery/gallery-6.jpg";
import image7 from "../asset/image/gallery/gallery-7.jpg";
import image8 from "../asset/image/gallery/gallery-8.jpg";
import { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageCard from "../components/imageCard/imageCard";
import { useTranslation } from "react-i18next";

// آرایه‌ای که لیست تصاویر را نگه می‌دارد. این متغیر خارج از تابع قرار داده شده
// تا هر بار که Gallery رندر می‌شود، دوباره ساخته نشود
const imageData = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 7, image: image7 },
  { id: 8, image: image8 },
];

function Gallery() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="section-sec">
        <div className="section-div">
          <div className="header">
            <h2>{t("navigation.gallery")}</h2>
            <p>{t("gallery.description")}</p>
          </div>
          <Container>
            <Row lg={4} md={3} xs={1} className="g-2">
              {imageData.map((img) => (
                <Col key={img.id}>
                  <ImageCard {...img} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default memo(Gallery);
