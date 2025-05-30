import Navbar from "../navbar/Navbar";
import Counter from "../counter/Counter";
import Appointment from "../appointment/Appointment";
import Customer from "../custom/customer";
import AboutContent from "./AboutContent";
import { useState, memo } from "react";

function About() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      <Navbar />
      <Appointment onRefresh={handleRefresh} />
      <Customer refresh={refresh} />
      <AboutContent />
      <Counter />
    </>
  );
}

export default memo(About);
