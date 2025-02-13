import { memo } from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="p-5 footer border-info border-top">
        <div className="d-flex align-items-center row mx-4">
          <div className="p-2 col-lg-4 col-md-5">
            <button className="fw-bold mt-4 btn d-flex align-self-right">Doctor Project</button>
            <div className="my-4">
              <p>خراسان رضوی , مشهد</p>
              <p>خیابان امام خمینی</p>
              <p className="pt-3">
                <strong>Number: </strong>
                <span>00989215178496</span>
              </p>
              <p>
                <strong>Email: </strong>
                <span>organji.mehdi@gmail.com</span>
              </p>
            </div>
            <div className="social-links">
              <button className="px-2 fs-3 opacity-75">
                <i className="fa-brands fa-twitter"></i>
              </button>
              <button className="px-2 fs-3 opacity-75">
                <i className="fa-brands fa-x-twitter"></i>
              </button>
              <button className="px-2 fs-3 opacity-75">
                <i className="fa-brands fa-instagram"></i>
              </button>
              <button className="px-2 fs-3 opacity-75">
                <i className="fa-brands fa-linkedin"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-2 col-md-3">
            <h5 className="fw-bold">لینک های مفید</h5>
            <button className="btn-link">home</button>
            <button className="btn-link">about us</button>
            <button className="btn-link">service</button>
            <button className="btn-link">term of us</button>
            <button className="btn-link">privacy policy</button>
          </div>
          <div className="col-lg-2 col-md-3">
            <h5 className="fw-bold">لینک های مفید</h5>
            <button className="btn-link">home</button>
            <button className="btn-link">about us</button>
            <button className="btn-link">service</button>
            <button className="btn-link">term of us</button>
            <button className="btn-link">privacy policy</button>
          </div>
          <div className="col-lg-2 col-md-3">
            <h5 className="fw-bold">لینک های مفید</h5>
            <button className="btn-link">home</button>
            <button className="btn-link">about us</button>
            <button className="btn-link">service</button>
            <button className="btn-link">term of us</button>
            <button className="btn-link">privacy policy</button>
          </div>
          <div className="col-lg-2 col-md-3">
            <h5 className="fw-bold">لینک های مفید</h5>
            <button className="btn-link">home</button>
            <button className="btn-link">about us</button>
            <button className="btn-link">service</button>
            <button className="btn-link">term of us</button>
            <button className="btn-link">privacy policy</button>
          </div>
        </div>
        <hr />
        <div className="footer-bottom text-center my-4">
          <p>@Copyright کلیه حقوق کپی رایت محفوظ است</p>
          <p>طراحی شده توسط مهدی اٌرگنجی Bootstrap React</p>
        </div>
      </div>
    </>
  );
}

export default memo(Footer);
