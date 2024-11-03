import { useEffect } from "react";
import "./Counter.css";
import * as PureCounter from "@srexi/purecounterjs";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Counter() {
  useEffect(() => {
    if (typeof PureCounter === 'function') {
      new PureCounter();
    };
    AOS.init();
  }, []);

  return (
    <>
      <div className="p-5 bg-light">
        <div className="row px-5 gy-5">
          <div className="col-lg-3 col-md-6 ">
            <div className="bg-white rounded shadow " data-aos="flip-right">
              <i className="fa-solid fa-flask-vial"></i>
              <h2
                data-purecounter-start="0"
                data-purecounter-end="12"
                className="purecounter"
              >
                12
              </h2>
              <p>آزمایشگاه </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className="bg-white rounded shadow g-5 " data-aos="flip-right">
              <i className="fa-solid fa-flask-vial"></i>
              <h2
                data-purecounter-start="0"
                data-purecounter-end="85"
                className="purecounter"
              >
                85
              </h2>
              <p>دستاورد ها </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className="bg-white rounded shadow g-5 " data-aos="flip-right">
              <i className="fa-solid fa-flask-vial"></i>
              <h2
                data-purecounter-start="0"
                data-purecounter-end="19"
                className="purecounter"
              >
                19
              </h2>
              <p>مشارکت ها </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className="bg-white rounded shadow g-5 " data-aos="flip-right">
              <i className="fa-solid fa-flask-vial"></i>
              <h2
                data-purecounter-start="0"
                data-purecounter-end="93"
                className="purecounter"
              >
                93
              </h2>
              <p>دکتر ها </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Counter;
