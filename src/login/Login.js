import Navbar from "../navbar/Navbar";
import "./Login.css";
import React, { memo, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";

function Login() {

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaValid, setCaptchaValid] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const newNum1 = Math.floor(Math.random() * 10);
    const newNum2 = Math.floor(Math.random() * 10);
    setNum1(newNum1);
    setNum2(newNum2);
    setCaptchaInput("");
    setCaptchaValid(null);
  };

  const validateCaptcha = (value) => {
    if (value === "") {
      setCaptchaValid(null);
    } else if (parseInt(value) === num1 + num2) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  };

  const handleLogin = async () => {
    if (!userName.trim() || !password.trim()) {
      toast.warn(" لطفاً یوزرنیم و پسورد را وارد کنید!", {
        position: "bottom-right",
        autoClose: 2000,
        icon: false,
        closeOnClick: true,
        theme: "colored",
        closeButton: false,
      });

      return;
    }


    if (!captchaValid) {
      toast.warn(" کپچا اشتباه است! لطفاً دوباره تلاش کنید.", {
        position: "bottom-right",
        autoClose: 2000,
        icon: false,
        closeOnClick: true,
        theme: "colored",
        closeButton: false,
      });
      generateCaptcha();
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/users");
      const user = response.data.find(
        (u) => u.username === userName && u.password === password
      );

      if (user) {
        localStorage.setItem("isLoggedIn", "true");
        toast.success("✅ ورود موفقیت‌آمیز بود!", {
          position: "bottom-right",
          autoClose: 2000,
          icon: false,
          closeOnClick: true,
          theme: "colored",
          closeButton: false,
        });
        navigate("/panel");
      } else {
        toast.warn(" یوزرنیم یا پسورد اشتباه است!", {
          position: "bottom-right",
          autoClose: 2000,
          icon: false,
          closeOnClick: true,
          theme: "colored",
          closeButton: false,
        });
      }
    } catch (error) {
      toast.warn(" خطا در ارتباط با سرور!", {
        position: "bottom-right",
        autoClose: 2000,
        icon: false,
        closeOnClick: true,
        theme: "colored",
        closeButton: false,
      });
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  const goToForgotPassword = () => {
    navigate("/forgot-password");
  };


  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div className="form-wrap">
        <div className="login">
          <h1>Log in</h1>

          <label htmlFor="loginName">Username</label>
          <input
            type="text"
            id="loginName"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />

          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="captcha-container">
            <p>
              مقدار {num1} + {num2} را وارد کنید:
            </p>
            <input
              type="number"
              value={captchaInput}
              onChange={(e) => {
                setCaptchaInput(e.target.value);
                validateCaptcha(e.target.value);
              }}
            />
            {captchaValid === false && (
              <p style={{ color: "red" }}>کپچا اشتباه است!</p>
            )}
          </div>

          <div className="button-container">
            <div
              className={`loginButton ${!captchaValid ? "disabled" : ""}`}
              onClick={handleLogin}
            >
              Log in
            </div>
            <div className="registerButton" onClick={goToRegister}>
              Register
            </div>
            <div className="forgot-password" onClick={goToForgotPassword}>
             فراموشی رمز عبور
            </div>
          </div>
        </div>
      </div>
      <ToastContainer transition={Flip} />
    </div>
  );
}

export default memo(Login);