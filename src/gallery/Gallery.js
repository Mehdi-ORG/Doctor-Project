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

function Gallery() {
  return (
    <>
      <Navbar />
      <section className="section-sec">
        <div className="section-div">
          <div className="header">
            <h2>عکس ها</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
          <div>
            <div className="row gy-1">
              <div className="col-lg-3 col-md-4 image-container">
                <div className="zoom-image">
                  <img src={image1} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 image-container">
                <div className="zoom-image">
                  <img src={image2} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 image-container">
                <div className="zoom-image">
                  <img src={image3} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 image-container">
                <div className="zoom-image">
                  <img src={image4} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 image-container">
                <div className="zoom-image">
                  <img src={image5} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 image-container">
                <div className="zoom-image">
                  <img src={image6} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 image-container">
                <div className="zoom-image">
                  <img src={image7} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 image-container">
                <div className="zoom-image">
                  <img src={image8} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Gallery;
