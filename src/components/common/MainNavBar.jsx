import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavBar.scss";

function MainNavBar() {
  const activeTabClassName = active => {
    const prefix = "nav-text__link fs-16 btn--";
    return active ? `${prefix}active` : `${prefix}unactive`;
  };
  return (
    <nav id="MainNavBar" className="flex align-center justify-center">
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
            to="/whot"
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
            to="/concept"
          >
            CONCEPT
          </NavLink>
        </nav>
      </div>
    </nav>
  );
}

export default MainNavBar;
