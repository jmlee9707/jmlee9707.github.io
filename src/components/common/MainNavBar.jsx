import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./MainNavBar.scss";

function MainNavBar() {
  const { pathname } = useLocation();
  console.log(pathname);

  const activeTabClassName = active => {
    const prefix = "nav-text__link fs-16 btn--";
    return active ? `${prefix}active` : `${prefix}unactive`;
  };
  return (
    <nav
      id="MainNavBar"
      className={
        pathname === "/"
          ? "homeClick flex align-center justify-center"
          : "noneClick flex align-center justify-center"
      }
      // style = {pathname==="/" ? {background-color : transparent} : {background-color : "#000000"} }
    >
      <div className="nav-container flex justify-center align-center">
        <nav className="nav-text notoBold fs-24 flex">
          <NavLink
            className={({ isActive }) => activeTabClassName(isActive)}
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) => activeTabClassName(isActive)}
            to="/who"
          >
            WHO
          </NavLink>
          <NavLink
            className={({ isActive }) => activeTabClassName(isActive)}
            to="/project"
          >
            PROJECT
          </NavLink>
          <NavLink
            className={({ isActive }) => activeTabClassName(isActive)}
            to="/experience"
          >
            EXPERIENCE
          </NavLink>
          <NavLink
            className={({ isActive }) => activeTabClassName(isActive)}
            to="/edu"
          >
            EDUCATION
          </NavLink>
        </nav>
      </div>
    </nav>
  );
}

export default MainNavBar;
