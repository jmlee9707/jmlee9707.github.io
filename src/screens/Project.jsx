import React from "react";
import "./Project.scss";
import icon from "../assets/images/folder.png";

import ProjectCard1 from "../components/project/ProjectCard1";
import ProjectCard2 from "../components/project/ProjectCard2";
import ProjectCard3 from "../components/project/ProjectCard3";

function Project() {
  return (
    <div className="project flex align-center column">
      <div className="project_container flex column">
        <div className="project_container_icon">
          <img src={icon} alt="icon" importance="high" />
        </div>
        <div className="project_container_title notoBold fs-40">Projects</div>
        {/* project list */}
        <ProjectCard1 />
        <div className="line" />
        <ProjectCard2 />
        <div className="line" />
        <ProjectCard3 />
      </div>
    </div>
  );
}

export default Project;
