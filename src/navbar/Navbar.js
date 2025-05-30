import { memo } from "react";
import BottomNavbar from "./Bottom Navbar/BottomNavbar";
import TopNavbar from "./Top Navbar/TopNavbar";

function Navbar() {
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
    </>
  );
}

export default memo(Navbar);
