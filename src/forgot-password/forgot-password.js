import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./forget-password.css";
import Navbar from "../navbar/Navbar";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async () => {
    if (!email.trim()) {
      toast.warn(" لطفاً ایمیل خود را وارد کنید!", {
        position: "bottom-right",
        autoClose: 2000,
        icon: false,
        closeOnClick: true,
        theme: "colored",
        closeButton: false,
      });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.warn(" لطفاً یک ایمیل معتبر وارد کنید!", {
        position: "bottom-right",
        autoClose: 2000,
        icon: false,
        closeOnClick: true,
        theme: "colored",
        closeButton: false,
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/reset-password",
        { email }
      );

      if (response.data.success) {
        toast.success("✅ رمز عبور جدید به ایمیل شما ارسال شد!", {
          position: "bottom-right",
          autoClose: 2000,
          icon: false,
          closeOnClick: true,
          theme: "colored",
          closeButton: false,
        });
      } else {
        toast.warn(" ایمیل وارد شده یافت نشد!", {
          position: "bottom-right",
          autoClose: 2000,
          icon: false,
          closeOnClick: true,
          theme: "colored",
          closeButton: false,
        });
      }
    } catch (error) {
      toast.warn(" خطا در ارسال ایمیل! لطفاً دوباره تلاش کنید.", {
        position: "bottom-right",
        autoClose: 2000,
        icon: false,
        closeOnClick: true,
        theme: "colored",
        closeButton: false,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-wrap">
        <div className="forgot-password-form">
          <h1>Forgot Password</h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <div className="button-container">
            <div className="resetButton" onClick={handlePasswordReset}>
              Reset Password
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default ForgotPassword;
