import React, { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/Shared/NavBar/NavBar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div>
      <NavBar theme={theme} setTheme={setTheme} />
      {/* <div className="dark:bg-black">
        
      </div> */}
      <div className="dark:bg-[#101828] py-10 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
