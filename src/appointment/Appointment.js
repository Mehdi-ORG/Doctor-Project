import { useState, memo, useCallback, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Appointment.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";

function Appointment({ onRefresh }) {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    number: "",
    date: null,
    department: "",
    doctor: "",
    notes: "",
    hour: "",
  });

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const phonePattern = /^(\+?989|0?0?989|0?9)(\d{2})[- ]?(\d{3})[- ]?(\d{4})$/;
  const emailPattern = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

  const infoHandler = useCallback(
    (e) => {
      setInfo({ ...info, [e.target.name]: e.target.value });
    },
    [info]
  );

  const dateChangeHandler = (selectedDate) => {
    setInfo((prevInfo) => ({ ...prevInfo, date: selectedDate }));
  };

  const clickHandler = useCallback(() => {
    const { name, email, number, date, department, doctor, hour } = info;

    if (!name || !email || !number || !date || !department || !doctor || !hour) {
      toast.warn(" لطفا تمام فیلدهای مورد نیاز را پر کنید!", {
        position: "top-right",
        autoClose: 2000,
        icon: false,
        closeOnClick: true,
        theme: "colored",
        closeButton: false,
      });
      return;
    }

    if (!phonePattern.test(info.number)) {
      toast.warn(" شماره وارد شده نامعتبر است!", {
        position: "top-right",
        autoClose: 2000,
        icon: false,
        closeOnClick: true,
        theme: "colored",
        closeButton: false,
      });
      return;
    }

    if (!emailPattern.test(info.email)) {
      toast.warn("ایمیل وارد شده صحیح نمی باشد", {
        position: "top-right",
        autoClose: 2000,
        icon: false,
        closeOnClick: true,
        theme: "colored",
        closeButton: false,
      });
      return;
    }

    axios
      .get(`http://localhost:5000/customer?email=${info.email}`)
      .then((response) => {
        if (response.data.length > 0) {
          toast.warn("این ایمیل قبلاً ثبت شده است.", {
            position: "top-right",
            autoClose: 2000,
            icon: false,
            closeOnClick: true,
            theme: "colored",
            closeButton: false,
          });
          return;
        }

        axios
          .get(`http://localhost:5000/customer?number=${info.number}`)
          .then((response) => {
            if (response.data.length > 0) {
              toast.warn("این شماره تلفن قبلاً ثبت شده است.", {
                position: "top-right",
                autoClose: 2000,
                icon: false,
                closeOnClick: true,
                theme: "colored",
                closeButton: false,
              });
              return;
            }

            const selectedDate = new Date(info.date);
            const now = new Date();
            if (selectedDate < now) {
              Swal.fire({
                text: "لطفا تاریخ معتبر انتخاب کنید.",
                confirmButtonText: "باشه",
              });
              return;
            }

            const convertedDate = `${info.date.year}.${info.date.month}.${info.date.day} - ${info.hour}`;
            const requestData = { ...info, date: convertedDate };

            axios
              .post("http://localhost:5000/customer", requestData)
              .then((response) => {
                if (response.status === 201) {
                  toast.success("نوبت ثبت شد", {
                    position: "top-right",
                    autoClose: 2000,
                    icon: false,
                    closeOnClick: true,
                    theme: "colored",
                    closeButton: false,
                  });
                  onRefresh();
                  setInfo({
                    name: "",
                    email: "",
                    number: "",
                    date: null,
                    department: "",
                    doctor: "",
                    notes: "",
                    hour: "",
                  });
                }
              })
              .catch(() => {
                toast.warn("خطا در ذخیره‌سازی اطلاعات", {
                  position: "top-right",
                  autoClose: 2000,
                  icon: false,
                  closeOnClick: true,
                  theme: "colored",
                  closeButton: false,
                });
              });
          })
          .catch(() => {
            toast.warn("خطا در بررسی شماره تلفن", {
              position: "top-right",
              autoClose: 2000,
              icon: false,
              closeOnClick: true,
              theme: "colored",
              closeButton: false,
            });
          });
      })
      .catch(() => {
        toast.warn("خطا در بررسی ایمیل", {
          position: "top-right",
          autoClose: 2000,
          icon: false,
          closeOnClick: true,
          theme: "colored",
          closeButton: false,
        });
      });
  }, [info, emailPattern, phonePattern, onRefresh]);

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  return (
    <section className="appointment-section">
      <div className="app-header">
        <h3>ثبت نوبت</h3>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</p>
      </div>
      <div className="text-center mb-3"></div>
      <div className="div-form">
        <form action="">
          <div className="row text-center info-form">
            <div className="col-md-4">
              <input
                type="text"
                name="name"
                value={info.name}
                onChange={infoHandler}
                placeholder="نام شما"
                className="w-100 h-100 input-fix"
                ref={inputRef}
              />
            </div>
            <div className="col-md-4 my-3 my-md-0">
              <input
                type="email"
                name="email"
                value={info.email}
                onChange={infoHandler}
                placeholder="ایمیل شما"
                className="w-100 h-100 input-fix"
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="number"
                value={info.number}
                onChange={infoHandler}
                placeholder="شماره تماس"
                className="w-100 h-100 input-fix"
              />
            </div>
          </div>
          <div className="form-date mt-md-4">
            <div className="row text-center info-form">
              <div className="col-md-4 d-flex">
                <div className="calendar-date flex-grow-1">
                  <DatePicker
                    value={info.date}
                    onChange={dateChangeHandler}
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-right"
                    timePicker
                    maxDate={maxDate}
                    render={
                      <input
                        className="date-input"
                        placeholder="انتخاب تاریخ"
                      />
                    }
                  />
                </div>
                <div className="calendar-time flex-grow-1">
                  <select
                    name="hour"
                    value={info.hour}
                    onChange={infoHandler}
                    className="w-100 h-100"
                  >
                    <option value="">انتخاب ساعت</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4 my-3 my-md-0">
                <select
                  name="department"
                  value={info.department}
                  onChange={infoHandler}
                  className="w-100 h-100"
                >
                  <option value="">انتخاب بخش</option>
                  <option value="مغز و اعصاب">مغز و اعصاب</option>
                  <option value="زایمان">زایمان</option>
                  <option value="ارتوپدی">ارتوپدی</option>
                  <option value="قلب و عروق">قلب و عروق</option>
                </select>
              </div>
              <div className="col-md-4">
                <select
                  name="doctor"
                  value={info.doctor}
                  onChange={infoHandler}
                  className="w-100 h-100"
                >
                  <option value="">انتخاب پزشک</option>
                  <option value=" خشایار احمدی">دکتر خشایار احمدی</option>
                  <option value=" نیلوفر پاکزاد">دکتر نیلوفر پاکزاد</option>
                  <option value=" پرستو حقیقی">دکتر پرستو حقیقی</option>
                  <option value="داریوش بزرگمهر">دکتر داریوش بزرگمهر</option>
                </select>
              </div>
            </div>
          </div>
          <div className="text-a-form mt-md-0">
            <textarea
              name="notes"
              value={info.notes}
              onChange={infoHandler}
              className="text-a-form"
              placeholder="توضیحات"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="text-center">
        <button
          type="button"
          className="form-button btn btn-outline-primary"
          onClick={clickHandler}
        >
          ثبت ویزیت
        </button>
      </div>
      <ToastContainer transition={Flip} />
    </section>
  );
}

export default memo(Appointment);
