import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@screens/Home";
import Who from "@screens/Who";
import Project from "@screens/Project";
import Education from "@screens/Education";
import MainNavBar from "@components/common/MainNavBar";
import Experience from "../screens/Experience";

function Router() {
  return (
    <>
      <MainNavBar />
      <Routes>
        {/* 홈 & 메인 */}
        <Route path="/" element={<Home />} />
        <Route path="/who" element={<Who />} />
        <Route path="/project" element={<Project />} />
        <Route path="/concept" element={<Experience />} />
        <Route path="/edu" element={<Education />} />
      </Routes>
    </>
  );
}

export default Router;
