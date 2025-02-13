import "./doctorsCard.css";
import { memo } from "react";

function DoctorsCard({ name, expertise, textD, image }) {
  return (
    <div className="">
      <div className="doctor-div">
        <div>
          <img src={image} alt="" className="img-fluid doctor-img" />
        </div>
        <div className="doctor-text1">
          <h4>{name} </h4>
          <p>{expertise} </p>
          <hr />
          <p> {textD} </p>
          <div className="doctor-icon">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(DoctorsCard)
