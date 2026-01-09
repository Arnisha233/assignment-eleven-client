// import React, { useEffect } from "react";
// import assets from "../assets/assets";

// const ThemeToggleBtn = ({ theme, setTheme }) => {
//   useEffect(() => {
//     const prefersDarkMode = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     setTheme(theme || prefersDarkMode ? "dark" : "light");
//   }, [setTheme]);

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);
//   return (
//     <div>
//       <button className="px-3 py-3 bg-[#C9A24D] rounded-2xl cursor-pointer">
//         {theme === "dark" ? (
//           <img onClick={() => setTheme("light")} src={assets.sun_icon} alt="" />
//         ) : (
//           <img onClick={() => setTheme("dark")} src={assets.moon_icon} alt="" />
//         )}
//       </button>
//     </div>
//   );
// };

// export default ThemeToggleBtn;

// -----------------------------------

import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, [setTheme]);

  useEffect(() => {
    if (!theme) return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="px-3 py-3 bg-[#C9A24D] rounded-2xl cursor-pointer flex items-center justify-center"
      >
        {theme === "dark" ? (
          <img src={assets.sun_icon} className="w-6 h-6" alt="Sun" />
        ) : (
          <img src={assets.moon_icon} className="w-6 h-6" alt="Moon" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleBtn;
