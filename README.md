# 🩺 Doctor Appointment Management System

A multilingual web-based system for managing doctor appointments, built with React. The app supports user registration, login, appointment management, and more. Designed with performance optimization and user experience in mind.

🌐 [Live Demo (Netlify)](https://doctor-project-mehdi-org.netlify.app)  
🎥 [YouTube Demo](https://youtu.be/GaxFLsggCO0)

---

## 🚀 Features

- ✅ **Appointment Management**: Create, update, delete, and view appointments
- ✅ **User Authentication**: Secure signup/login with validation (no duplicate usernames/emails)
- ✅ **Multilingual**: Persian, English, Arabic, and French
- ✅ **Optimized Rendering**: Uses `React.memo`, `useCallback`, `useMemo` for performance
- ✅ **Enhanced UX**: Includes loading spinner, toast notifications (React Toastify), SweetAlert2 confirmation
- ✅ **Responsive UI** with RTL support and modern design

---

## ⚙️ Technologies Used

- **Frontend**: React.js, CSS, Bootstrap
- **State Management**: Context API
- **Validation**: RegEx (custom patterns)
- **API Integration**: Axios, Fetch API
- **Performance**: React.memo, useCallback, useMemo
- **UX/UI Enhancements**: Framer Motion, React Toastify, SweetAlert2

---

## 📌 Challenges & Achievements

- 🔍 Form Optimization: Reduced unnecessary re-renders, better performance
- 🌍 Dynamic Multilingual Support: Languages loaded dynamically
- 🧠 State Management Mastery: Used Context API for scalable and clean global state

---

## 🧪 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Mehdi-ORG/Doctor-Project.git

# 2. Enter the project folder
cd Doctor-Project

# 3. Install dependencies
yarn install   # or npm install

# 4. Run the app
yarn start     # or npm start

# 5. Run the mock server (backend)
json-server --watch db.json --port 5000

🛠 Skills Demonstrated
React.js · JavaScript (ES6+) · React Router · React Hooks · API Integration · Axios · JSON Server / REST API · Framer Motion · React Toastify · SweetAlert2 · Form Validation (RegEx, Custom Validation) · UI/UX Design

📌 Note
Due to hosting limitations (Render/Vercel require a credit card for backend), the mock server (json-server) is not deployed online.

Please use it locally by running:
json-server --watch db.json --port 5000


🇮🇷 فارسی (Persian)
#سامانه مدیریت نوبت‌دهی پزشکی
این پروژه یک سامانه وب برای مدیریت نوبت‌دهی پزشکی است که شامل قابلیت‌های ثبت‌نام، ورود کاربران و مدیریت نوبت‌ها می‌باشد. طراحی و پیاده‌سازی این سیستم با React انجام شده و با بهینه‌سازی عملکرد و تجربه کاربری مناسب، کاربر را قادر می‌سازد تا به راحتی نوبت‌های پزشکی خود را مدیریت کند.

##ویژگی‌ها
✔ مدیریت نوبت‌دهی: ثبت، ویرایش، حذف و مشاهده نوبت‌ها
✔ ثبت‌نام و ورود با اعتبارسنجی قوی
✔ پشتیبانی از زبان‌های فارسی، انگلیسی، عربی و فرانسوی
✔ بهینه‌سازی رندرها با React.memo و useCallback
✔ پیام‌های توست، SweetAlert2، اسپینر و طراحی مدرن و واکنش‌گرا


نحوه اجرا ## 
ریپازیتوری را کلون کنید

وارد پوشه شوید

پکیج‌ها را نصب کنید (yarn install)

برنامه را اجرا کنید (yarn start)

برای اجرای سرور ساختگی از دستور زیر استفاده کنید:

json-server --watch db.json --port 5000

##مهارت‌های استفاده‌شده
React.js · JavaScript ES6+ · Context API · i18next · JSON Server · UX · Responsive Design · React Hooks · RegEx · Toast & Modal Libraries


