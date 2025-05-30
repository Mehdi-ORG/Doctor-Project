// کامپوننت صفحه ورود به سیستم
import Navbar from "../navbar/Navbar";
import "./Login.css";
import React, { memo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authService } from "../services/authService";
import { showToast } from "../utils/toastUtils";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  // تعریف state های مورد نیاز فرم
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    captchaInput: "",
  });
  // اعداد کپچا
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  // وضعیت اعتبارسنجی کپچا
  const [captchaValid, setCaptchaValid] = useState(null);
  // وضعیت لودینگ
  const [isLoading, setIsLoading] = useState(false);
  // نمایش/مخفی کردن رمز عبور
  const [showPassword, setShowPassword] = useState(false);
  // حالت "مرا به خاطر بسپار"
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  // تولید کپچا در زمان لود شدن کامپوننت
  useEffect(() => {
    generateCaptcha();
  }, []);

  // تابع تولید اعداد تصادفی برای کپچا
  const generateCaptcha = () => {
    const newNum1 = Math.floor(Math.random() * 10);
    const newNum2 = Math.floor(Math.random() * 10);
    setNum1(newNum1);
    setNum2(newNum2);
    setFormData((prev) => ({ ...prev, captchaInput: "" }));
    setCaptchaValid(null);
  };

  // تابع اعتبارسنجی کپچا
  const validateCaptcha = (value) => {
    if (value === "") {
      setCaptchaValid(null);
    } else if (parseInt(value) === num1 + num2) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  };

  // تابع مدیریت تغییرات فیلدهای فرم
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "captchaInput") {
      validateCaptcha(value);
    }
  };

  // تابع مدیریت عملیات ورود
  const handleLogin = async () => {
    if (!formData.userName.trim() || !formData.password.trim()) {
      showToast.error(t("login.messages.enterCredentials"));
      return;
    }

    if (!captchaValid) {
      showToast.error(t("login.messages.invalidCaptcha"));
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
        showToast.success(t("login.messages.loginSuccess"));
        navigate("/panel");
      } else {
        showToast.error(t("login.messages.invalidCredentials"));
      }
    } catch (error) {
      showToast.error(t("login.messages.serverError"));
    } finally {
      setIsLoading(false);
    }
  };

  // توابع هدایت به صفحات دیگر
  const goToRegister = () => navigate("/register");
  const goToForgotPassword = () => navigate("/forgot-password");

  // رندر کامپوننت
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div className="form-wrap">
        <div className="login">
          <h1>{t("login.title")}</h1>

          {/* فیلد نام کاربری */}
          <label htmlFor="loginName">{t("login.username")}</label>
          <input
            type="text"
            id="loginName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            placeholder={t("login.usernamePlaceholder")}
          />

          {/* فیلد رمز عبور با قابلیت نمایش/مخفی کردن */}
          <label htmlFor="loginPassword">{t("login.password")}</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="loginPassword"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder={t("login.passwordPlaceholder")}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>

          {/* بخش کپچا */}
          <div className="captcha-container">
            <p>
              {t("login.captcha.enterSum", {
                num1: num1,
                num2: num2,
              })}
            </p>
            <input
              type="number"
              name="captchaInput"
              value={formData.captchaInput}
              onChange={handleInputChange}
              placeholder={t("login.captcha.placeholder")}
            />
            {captchaValid === false && (
              <p style={{ color: "red" }}>{t("login.captcha.invalid")}</p>
            )}
          </div>

          {/* چک‌باکس "مرا به خاطر بسپار" */}
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">{t("rememberMe")}</label>
          </div>

          {/* دکمه‌های عملیات */}
          <div className="button-container">
            <div
              className={`loginButton ${
                !captchaValid || isLoading ? "disabled" : ""
              }`}
              onClick={handleLogin}
            >
              {isLoading
                ? t("login.buttons.loggingIn")
                : t("login.buttons.login")}
            </div>
            <div className="registerButton" onClick={goToRegister}>
              {t("login.buttons.register")}
            </div>
            <div className="forgot-password" onClick={goToForgotPassword}>
              {t("login.buttons.forgotPassword")}
            </div>
          </div>
        </div>
      </div>
      {/* کامپوننت نمایش پیام‌های سیستمی */}
      <ToastContainer transition={Flip} />
    </div>
  );
}

export default memo(Login);
