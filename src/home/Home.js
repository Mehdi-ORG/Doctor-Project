import Navbar from "../navbar/Navbar";
import Card from "react-bootstrap/Card";
import Footer from "../footer/Footer";
import "./Home.css";
function Home() {
  return (
    <>
      <Navbar />
      <section className="bg p-5">
        <div className="py-2  px-3">
          <h1 className="fw-bold">به وبسایت من خوش آمدید</h1>
          <p className="h5 my-3">
            من حداکثر تلاشم را میکنم تا بهترین طراحی را داشته باشم و نظر شما را
            جلب کنم
          </p>
        </div>
        <div className="d-flex align-items-center row align-items-stretch justify-content-center py-2">
          <div className=" col-lg-4 d-flex align-items-stretch px-4 ">
            <div className="card shadow-sm  my-4 col-12 px-3 info-card">
              <Card.Title className="fw-bold fs-4 mt-5 ">خصوصیات من</Card.Title>
              <Card.Text className=" my-4 mx-2 card-text">
                آینده نگر و اهل برنامه ریزی های بلند مدت هستم, به دنبال بروز
                حداکثر توانایی های خودم هستم ,رابطه بسیار خوبی با چالش ها دارم
                ,وقت شناسم , اهل تسلیم شدن نیستم و مسئولیت کارهای خودم را به
                عهده میگیرم. آینده نگر و اهل برنامه ریزی های بلند مدت هستم,
              </Card.Text>
              <a href="#" class="btn btn-primary  mb-5 mt-3 rounded-5 ">
              <i className="fa-solid fa-chevron-right text-white p-3 card-link-a"> نمونه کارهای من</i>
              </a>
            </div>
          </div>
          <div className=" d-flex align-items-center col-lg-8 row pb-4 ">
            <div className="col-xl-4 gy-4 text-center ">
              <div className="card col-12 shadow-sm px-3">
                <div className="font-icon ">
                  <i className="fa-regular fa-file-lines"></i>
                </div>
                <div className="card-body">
                  <h5 className="fw-bold py-2">قرار دادها</h5>
                  <p className="card-text py-2 mb-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 gy-4 text-center  ">
              <div className="card col-12 shadow-sm px-3">
                <div className="font-icon ">
                  <i className="fa-regular fa-gem"></i>
                </div>
                <div className="card-body">
               <h5 className="fw-bold py-2">پروژه ها</h5>
                  <p className="card-text py-2 mb-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 gy-4 text-center ">
              <div className="card col-12 shadow-sm px-3">
                <div className="font-icon ">
                  <i className="fa-solid fa-vial-virus"></i>
                </div>
                <div className="card-body">
                <h5 className="fw-bold py-2"> آزمایشگاه</h5>
                  <p className="card-text py-2 mb-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
export default Home;
