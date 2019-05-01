import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project, color}) => {
   return(
        <div className={`card z-depth-0 project-summary ${color} darken-4`}>
            <div className="card-content grey-text text-darken-3">
                <span className="card-title white-text">{project.title}</span>
                <p className="white-text">Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="white-text">
                  {moment(project.createedAt.toDate()).calendar()}
                </p>
            </div>
        </div>
    )
}

export default ProjectSummary
