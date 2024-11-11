import { useState } from "react";
import "./Appointment.css";

function Appointment() {
  const[name,setName]=useState("dfgdfg")
  const[email,setEmail]=useState("")
  const[number,setNumber]=useState("")
  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };
  return (
    <>
      <section className="appointment-section">
        <div className="app-header">
          <h3>قرار ملاقات ها</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <div className="div-form">
          <form action="">
            <div className="row text-center info-form">
              <div className="col-md-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  placeholder="your name"
                  className="w-100 h-100 input-fix"
                />
              </div>
              <div className="col-md-4 my-3 my-md-0">
                <input
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="your email"
                className="w-100 h-100 input-fix"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={number}
                  onChange={(e)=>setNumber(e.target.value)}
                  placeholder="your number"
                  className="w-100 h-100 input-fix"
                />
              </div>
            </div>
            <div className="form-date mt-md-4">
              <div className="row text-center info-form">
                <div className="col-md-4">
                  <input
                    type="datetime-local"
                    name=""
                    placeholder="your name"
                    className="w-100 h-100 input-fix"
                  />
                </div>
                <div className="col-md-4 my-3 my-md-0">
                  <select
                    type="text"
                    name=""
                    placeholder="انتخاب بخش"
                    className="w-100 h-100"
                  >
                    <option value="">بخش مغز و اعصاب</option>
                    <option value="">بخش زایمان</option>
                    <option value="">بخش ارتوپد</option>
                    <option value="">بخش قلب و عروق</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    type="text"
                    name=""
                    placeholder="your number"
                    className="w-100 h-100"
                  >
                    <option value="">selected Doctor</option>
                    <option value="">selected Doctor 1</option>
                    <option value="">selected Doctor 2 </option>
                    <option value="">selected Doctor 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-a-form mt-md-0">
              <textarea
                name=""
                id=""
                className="text-a-form"
                placeholder="تایپ کنید"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="text-center ">
          <button
            type="submit"
            className="form-button btn btn-outline-primary "
          >
            make an appointment
          </button>
        </div>
      </section>
    </>
  );
}
export default Appointment;
