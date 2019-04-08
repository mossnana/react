import React from "react";

const ProjectDetails = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <span className="card-title">Project Title - {id}</span>
        <p>Hello World</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
