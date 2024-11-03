import { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./Service.css";
import Aos from "aos";
import Department from "../department/Department";

function Service() {
  useEffect(()=>{
  Aos.init();
  },[])
  return (
    <>
    <Navbar/>
      <section className="py-4">
        <div className="div-header">
          <h1 className="px-3">خدمات</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <div className="py-5">
        <div className="row gy-5 container-fluid">
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="bg-white rounded service-bgwhite" >
              <div className="icon">
                <i className="fas fa-hospital-user"></i>
              </div>
              <a className="a-link">
                <h3 className="mb-4">بیمارستان </h3>
              </a>
              <p className="matn text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="bg-white rounded g-5 service-bgwhite">
              <div className="icon">
                <i className="fas fa-pills"></i>
              </div>
              <a className="a-link">
                <h3 className="mb-4">داروها </h3>
              </a>
              <p className="matn text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="bg-white rounded service-bgwhite">
              <div className="icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <a className="a-link">
                <h3 className="mb-4">نوار قلب </h3>
              </a>
              <p className="matn text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="bg-white rounded service-bgwhite">
              <div className="icon">
                <i className="fas fa-dna"></i>
              </div>
              <a className="a-link">
                <h3 className="mb-4">دی ان ای </h3>
              </a>
              <p className="matn text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="bg-white rounded service-bgwhite">
              <div className="icon">
                <i className="fas fa-wheelchair"></i>
              </div>
              <a className="a-link">
                <h3 className="mb-4">معلولین </h3>
              </a>
              <p className="matn text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="bg-white rounded service-bgwhite">
              <div className="icon">
                <i className="fas fa-notes-medical"></i>
              </div>
              <a className="a-link">
                <h3 className="mb-4">یاداشت های درمانی </h3>
              </a>
              <p className="matn text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
      <Department/>
    </>
  );
}

export default Service;
