import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@screens/Home";
import Who from "@screens/Who";
import Project from "@screens/Project";
import Concept from "@screens/Concept";
import MainNavBar from "@components/common/MainNavBar";

function Router() {
  return (
    <>
      <MainNavBar />

      <Routes>
        {/* 홈 & 메인 */}
        <Route path="/" element={<Home />} />
        <Route path="/who" element={<Who />} />
        <Route path="/project" element={<Project />} />
        <Route path="/concept" element={<Concept />} />
      </Routes>
    </>
  );
}

export default Router;
