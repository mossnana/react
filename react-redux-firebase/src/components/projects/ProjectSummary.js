import React from "react";

const ProjectSummary = ({ project }) => {
  console.log("Project Summary Component");
  console.log(project);
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">8 Apr 2019, 12:39</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
