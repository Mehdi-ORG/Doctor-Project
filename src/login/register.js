import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./Register.css";
import Navbar from "../navbar/Navbar";
import { useTranslation } from "react-i18next";

function Register() {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Register component - Current language:", i18n.language);
    console.log(
      "Register component - Available translations:",
      i18n.getResourceBundle(i18n.language, "translation")
    );
  }, [i18n.language]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    if (!username || !password || !email) {
      Swal.fire({
        text: t("register.messages.fillAllFields"),
        icon: "warning",
        confirmButtonText: t("common.ok"),
      });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({
        text: t("register.messages.invalidEmail"),
        icon: "error",
        confirmButtonText: t("common.ok"),
      });
      return;
    }
    if (!validatePassword(password)) {
      Swal.fire({
        text: t("register.messages.invalidPassword"),
        icon: "error",
        confirmButtonText: t("common.ok"),
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3001/users");
      const isUsernameTaken = data.some((user) => user.username === username);
      const isEmailTaken = data.some((user) => user.email === email);

      if (isUsernameTaken) {
        Swal.fire({
          text: t("register.messages.usernameTaken"),
          icon: "error",
          confirmButtonText: t("common.ok"),
        });
        return;
      }

      if (isEmailTaken) {
        Swal.fire({
          text: t("register.messages.emailTaken"),
          icon: "error",
          confirmButtonText: t("common.ok"),
        });
        return;
      }

      await axios.post("http://localhost:3001/users", {
        username,
        password,
        email,
      });

      Swal.fire({
        text: t("register.messages.registerSuccess"),
        icon: "success",
        confirmButtonText: t("common.ok"),
      });

      setUsername("");
      setPassword("");
      setEmail("");
    } catch (error) {
      Swal.fire({
        text: t("register.messages.serverError"),
        icon: "error",
        confirmButtonText: t("common.ok"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <h1>{t("register.title")}</h1>
        <label htmlFor="registerUsername">{t("register.username")}</label>
        <input
          type="text"
          id="registerUsername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={t("register.usernamePlaceholder")}
        />

        <label htmlFor="registerEmail">{t("register.email")}</label>
        <input
          type="email"
          id="registerEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("register.emailPlaceholder")}
        />

        <label htmlFor="registerPassword">{t("register.password")}</label>
        <input
          type="password"
          id="registerPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t("register.passwordPlaceholder")}
        />

        <div
          className={`register-button ${isLoading ? "disabled" : ""}`}
          onClick={!isLoading ? handleRegister : undefined}
        >
          {isLoading
            ? t("register.buttons.registering")
            : t("register.buttons.register")}
        </div>
      </div>
    </>
  );
}

export default Register;
