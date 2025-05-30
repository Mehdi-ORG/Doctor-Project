import { useState, memo, useCallback, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Appointment.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
import { useTranslation } from "react-i18next";

function Appointment({ onRefresh }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";
  const inputRef = useRef(null);
  const [timePlaceholder, setTimePlaceholder] = useState(
    t("appointment.selectTime")
  );
  const [info, setInfo] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    time: "",
    department: "",
    doctor: "",
    notes: "",
  });

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
    if (selectedDate) {
      setInfo((prevInfo) => ({ ...prevInfo, date: selectedDate }));
    }
  };

  // Update calendar settings when language changes
  useEffect(() => {
    const {
      calendar: newCalendar,
      locale: newLocale,
      format: newFormat,
    } = getCalendarSettings();
    if (info.date) {
      // Convert the current date to the new calendar system
      const currentDate = new Date(info.date);
      setInfo((prev) => ({
        ...prev,
        date: currentDate,
      }));
    }
  }, [i18n.language]);

  // Add useEffect for handling screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 992) {
        setTimePlaceholder(t("appointment.selectTimeShort"));
      } else {
        setTimePlaceholder(t("appointment.selectTime"));
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [t, i18n.language]);

  const clickHandler = () => {
    const { name, email, number, date, department, doctor, time } = info;

    if (
      !name ||
      !email ||
      !number ||
      !date ||
      !department ||
      !doctor ||
      !time
    ) {
      toast.warn(t("appointment.validation.fillAllFields"), {
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
      toast.warn(t("appointment.validation.invalidPhone"), {
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
      toast.warn(t("appointment.validation.invalidEmail"), {
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
      .get(`http://localhost:3001/customer?email=${info.email}`)
      .then((response) => {
        if (response.data.length > 0) {
          toast.warn(t("appointment.validation.emailExists"), {
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
          .get(`http://localhost:3001/customer?number=${info.number}`)
          .then((response) => {
            if (response.data.length > 0) {
              toast.warn(t("appointment.validation.phoneExists"), {
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
                text: t("appointment.validation.invalidDate"),
                confirmButtonText: t("common.ok"),
              });
              return;
            }

            const convertedDate = `${info.date.year}.${info.date.month}.${info.date.day} - ${info.time}`;
            const requestData = { ...info, date: convertedDate };

            axios
              .post("http://localhost:5000/customer", requestData)
              .then((response) => {
                if (response.status === 201) {
                  toast.success(t("appointment.validation.success"), {
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
                    time: "",
                  });
                }
              })
              .catch(() => {
                toast.warn(t("appointment.validation.saveError"), {
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
            toast.warn(t("appointment.validation.phoneCheckError"), {
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
        toast.warn(t("appointment.validation.emailCheckError"), {
          position: "top-right",
          autoClose: 2000,
          icon: false,
          closeOnClick: true,
          theme: "colored",
          closeButton: false,
        });
      });
  };

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  // Get calendar and locale based on current language
  const getCalendarSettings = () => {
    switch (i18n.language) {
      case "fa":
        return {
          calendar: persian,
          locale: persian_fa,
          format: "YYYY/MM/DD",
        };
      case "fr":
        return {
          calendar: gregorian,
          locale: gregorian_en,
          format: "DD/MM/YYYY",
        };
      default:
        return {
          calendar: gregorian,
          locale: gregorian_en,
          format: "MM/DD/YYYY",
        };
    }
  };

  const { calendar, locale, format } = getCalendarSettings();

  return (
    <section className="appointment py-5" aria-label="Book Appointment">
      <div className="container">
        <header className="text-center mb-5">
          <h1>{t("appointment.title")}</h1>
          <p>{t("appointment.description")}</p>
        </header>

        <div className="div-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-grid row g-4">
              <div className="form-section col-12 col-md-6 mb-4">
                <label htmlFor="name" className="form-label">
                  <h4>{t("appointment.yourName")}</h4>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={info.name}
                  onChange={infoHandler}
                  placeholder={t("appointment.yourName")}
                  ref={inputRef}
                  required
                  aria-required="true"
                />
              </div>

              <div className="form-section col-12 col-md-6 mb-4">
                <label htmlFor="email" className="form-label">
                  <h4>{t("appointment.yourEmail")}</h4>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={info.email}
                  onChange={infoHandler}
                  placeholder={t("appointment.yourEmail")}
                  required
                  aria-required="true"
                />
              </div>

              <div className="form-section col-12 col-md-6 mb-4">
                <label htmlFor="phone" className="form-label">
                  <h4>{t("appointment.phoneNumber")}</h4>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="number"
                  value={info.number}
                  onChange={infoHandler}
                  placeholder={t("appointment.phoneNumber")}
                  required
                  aria-required="true"
                  pattern="[0-9]{11}"
                />
              </div>

              <div className="form-section col-12 col-md-6 mb-4">
                <label htmlFor="date" className="form-label">
                  <h4>{t("appointment.date")}</h4>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={info.date}
                  onChange={infoHandler}
                  required
                  aria-required="true"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="form-section col-12 col-md-6 mb-4">
                <label htmlFor="time" className="form-label">
                  <h4>{t("appointment.time")}</h4>
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={info.time}
                  onChange={infoHandler}
                  required
                  aria-required="true"
                />
              </div>

              <div className="form-section col-12 col-md-6 mb-4">
                <label htmlFor="department" className="form-label">
                  <h4>{t("appointment.department")}</h4>
                </label>
                <select
                  id="department"
                  name="department"
                  value={info.department}
                  onChange={infoHandler}
                  required
                  aria-required="true"
                >
                  <option value="">{t("appointment.selectDepartment")}</option>
                  <option value="cardiology">
                    {t("appointment.departments.cardiology")}
                  </option>
                  <option value="neurology">
                    {t("appointment.departments.neurology")}
                  </option>
                  <option value="hepatology">
                    {t("appointment.departments.hepatology")}
                  </option>
                  <option value="pediatrics">
                    {t("appointment.departments.pediatrics")}
                  </option>
                  <option value="eyeCare">
                    {t("appointment.departments.eyeCare")}
                  </option>
                </select>
              </div>

              <div className="form-section col-12 col-md-6 mb-4">
                <label htmlFor="doctor" className="form-label">
                  <h4>{t("appointment.doctor")}</h4>
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  value={info.doctor}
                  onChange={infoHandler}
                  required
                  aria-required="true"
                >
                  <option value="">{t("appointment.selectDoctor")}</option>
                  <option value="drSmith">
                    {t("appointment.doctors.drSmith")}
                  </option>
                  <option value="drJohnson">
                    {t("appointment.doctors.drJohnson")}
                  </option>
                  <option value="drWilliams">
                    {t("appointment.doctors.drWilliams")}
                  </option>
                  <option value="drBrown">
                    {t("appointment.doctors.drBrown")}
                  </option>
                  <option value="drJones">
                    {t("appointment.doctors.drJones")}
                  </option>
                </select>
              </div>

              <div className="form-section notes-section col-12 mb-4">
                <label htmlFor="notes" className="form-label">
                  <h4>{t("appointment.notes")}</h4>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={info.notes}
                  onChange={infoHandler}
                  placeholder={t("appointment.notes")}
                  rows="4"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        <div className="text-center">
          <button
            type="button"
            className="form-button btn btn-outline-primary"
            onClick={clickHandler}
            aria-label={t("appointment.bookAppointment")}
          >
            {t("appointment.bookAppointment")}
          </button>
        </div>
      </div>
      <ToastContainer transition={Flip} />
    </section>
  );
}

export default memo(Appointment);
