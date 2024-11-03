import Navbar from "../navbar/Navbar";
import aboutImage from "../asset/image/about.jpg";
import Counter from "../counter/Counter";
import "./About.css";
import Appointment from "../appointment/Appointment";

function About() {
  return (
    <>
      <Navbar />
      <div className="px-5 d-flex row align-items-center">
        <div className="col-lg-6 my-4 ">
          <div className="px-3">
            <img src={aboutImage} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6 my-4">
          <div className="px-3">
            <h2 className="fw-bold ">درباره ما</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <ul className="ul">
              <li className="d-flex align-items-center my-5">
                <i className="fa-solid fa-flask-vial"></i>
                <div>
                  <h5 className="fw-bold"> شب و روز تلاش کن</h5>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از است.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-center my-5">
                <i className="fa-solid fa-fire-extinguisher"></i>
                <div>
                  <h5 className="fw-bold"> شب و روز تلاش کن</h5>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از است.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-center my-5">
                <i className="fa-solid fa-heart-circle-xmark"></i>
                <div>
                  <h5 className="fw-bold"> شب و روز تلاش کن</h5>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از است.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Counter />
      <Appointment/>
    </>
  );
}

export default About;
