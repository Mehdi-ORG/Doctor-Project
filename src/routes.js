import About from "./about/About";
import Customer from "./custom/customer";
import Doctors from "./doctors/Doctors";
import Gallery from "./gallery/Gallery";
import Home from "./home/Home";
import Login from "./login/Login";
import Service from "./service/Service";
import Panel from "./panel/panel"
import Register from "./login/register";
import ForgotPassword from "./forgot-password/forgot-password";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/doctors",
    element: <Doctors />,
  },
  {
    path: "/panel",
    element:<Panel /> ,
  },
  {
    path: "/register",
    element: <Register/> ,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/> ,
  },
];
export default routes;
