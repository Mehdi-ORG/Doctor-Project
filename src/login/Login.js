import Navbar from "../navbar/Navbar";
import "./Login.css";
import React, { memo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authService } from "../services/authService";
import { showToast } from "../utils/toastUtils";

function Login() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    captchaInput: "",
  });
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaValid, setCaptchaValid] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const newNum1 = Math.floor(Math.random() * 10);
    const newNum2 = Math.floor(Math.random() * 10);
    setNum1(newNum1);
    setNum2(newNum2);
    setFormData((prev) => ({ ...prev, captchaInput: "" }));
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "captchaInput") {
      validateCaptcha(value);
    }
  };

  const handleLogin = async () => {
    if (!formData.userName.trim() || !formData.password.trim()) {
      showToast.error("لطفاً یوزرنیم و پسورد را وارد کنید!");
      return;
    }

    if (!captchaValid) {
      showToast.error("کپچا اشتباه است! لطفاً دوباره تلاش کنید.");
      generateCaptcha();
      return;
    }

    setIsLoading(true);
    try {
      const user = await authService.login(
        formData.userName,
        formData.password
      );

      if (user) {
        if (rememberMe) {
          localStorage.setItem("isLoggedIn", "true");
        } else {
          sessionStorage.setItem("isLoggedIn", "true");
        }
        showToast.success("✅ ورود موفقیت‌آمیز بود!");
        navigate("/panel");
      } else {
        showToast.error("یوزرنیم یا پسورد اشتباه است!");
      }
    } catch (error) {
      showToast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const goToRegister = () => navigate("/register");
  const goToForgotPassword = () => navigate("/forgot-password");

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
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            placeholder="Username"
          />

          <label htmlFor="loginPassword">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="loginPassword"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>

          <div className="captcha-container">
            <p>
              مقدار {num1} + {num2} را وارد کنید:
            </p>
            <input
              type="number"
              name="captchaInput"
              value={formData.captchaInput}
              onChange={handleInputChange}
            />
            {captchaValid === false && (
              <p style={{ color: "red" }}>کپچا اشتباه است!</p>
            )}
          </div>

          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">مرا به خاطر بسپار</label>
          </div>

          <div className="button-container">
            <div
              className={`loginButton ${
                !captchaValid || isLoading ? "disabled" : ""
              }`}
              onClick={handleLogin}
            >
              {isLoading ? "در حال ورود..." : "Log in"}
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
