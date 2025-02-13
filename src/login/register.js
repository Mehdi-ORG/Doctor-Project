import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./Register.css";
import Navbar from "../navbar/Navbar";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password)=>{
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
    return passwordRegex.test(password);
  }

  const handleRegister = async () => {
    if (!username || !password || !email) {
      Swal.fire({
        text: "لطفاً تمام فیلدها را پر کنید!",
        icon: "warning",
        confirmButtonText: "بستن",
      });
      return;
    }

    if (!validateEmail(email)) {
      alert("ایمیل وارد شده معتبر نیست");
      return;
    }
    if (!validatePassword(password)) {
      alert("پسورد باید شامل یه حرف کوچک انگلیسی, یه حرف بزرگ انگلیسی و یک عدد وحداقل 8 حرف باشد");
      return;
    }

    try {
      const { data } = await axios.get("http://localhost:5000/users");
      const isUsernameTaken = data.some((user) => user.username === username);
      const isEmailTaken = data.some((user) => user.email === email);

      if (isUsernameTaken) {
        Swal.fire({
          text: "این نام کاربری قبلاً استفاده شده است!",
          icon: "error",
          confirmButtonText: "بستن",
        });
        return;
      }

      if (isEmailTaken) {
        Swal.fire({
          text: "این ایمیل قبلاً استفاده شده است!",
          icon: "error",
          confirmButtonText: "بستن",
        });
        return;
      }

      await axios.post("http://localhost:5000/users", {
        username,
        password,
        email,
      });

      Swal.fire({
        text: "ثبت‌نام با موفقیت انجام شد!",
        icon: "success",
        confirmButtonText: "بستن",
      });

      setUsername("");
      setPassword("");
      setEmail("");
    } catch (error) {
      Swal.fire({
        text: "خطایی در سرور رخ داد. لطفاً دوباره تلاش کنید!",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <h1>ثبت نام</h1>
        <label htmlFor="registerUsername">نام کاربری</label>
        <input
          type="text"
          id="registerUsername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="نام کاربری"
        />

        <label htmlFor="registerEmail">ایمیل</label>
        <input
          type="email"
          id="registerEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل"
        />

        <label htmlFor="registerPassword">رمز عبور</label>
        <input
          type="password"
          id="registerPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز عبور"
        />

        <div className="register-button" onClick={handleRegister}>
          ثبت نام
        </div>
      </div>
    </>
  );
}

export default Register;
