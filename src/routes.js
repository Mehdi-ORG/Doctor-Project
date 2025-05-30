// فایل تنظیمات مسیریابی برنامه
import { lazy } from "react";
// وارد کردن کامپوننت‌های مورد نیاز
import Doctors from "./doctors/Doctors";
import Gallery from "./gallery/Gallery";
import Home from "./home/Home";
import Login from "./login/Login";
import Service from "./service/Service";
import Panel from "./panel/panel";
import Register from "./login/register";
import ForgotPassword from "./forgot-password/forgot-password";

// لود تنبل (lazy loading) کامپوننت درباره ما برای بهینه‌سازی عملکرد
const About = lazy(() => import("./about/About"));

// تعریف مسیرهای برنامه
const routes = [
  {
    path: "/", // مسیر صفحه اصلی
    element: <Home />,
  },
  {
    path: "/about", // مسیر صفحه درباره ما
    element: <About />,
  },
  {
    path: "/service", // مسیر صفحه خدمات
    element: <Service />,
  },
  {
    path: "/login", // مسیر صفحه ورود
    element: <Login />,
  },
  {
    path: "/gallery", // مسیر صفحه گالری
    element: <Gallery />,
  },
  {
    path: "/doctors", // مسیر صفحه پزشکان
    element: <Doctors />,
  },
  {
    path: "/panel", // مسیر پنل کاربری
    element: <Panel />,
  },
  {
    path: "/register", // مسیر صفحه ثبت نام
    element: <Register />,
  },
  {
    path: "/forgot-password", // مسیر صفحه فراموشی رمز عبور
    element: <ForgotPassword />,
  },
];

export default routes;
