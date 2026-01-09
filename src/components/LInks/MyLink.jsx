import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-[#B38F40]"
          : `${className} dark:text-[#FFFFFF] text-[#1A1A1A] text-sm font-medium`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
