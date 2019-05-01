import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'


const ProjectList = ({projects}) => {
  return(
    <div className="project-list section">
    <h5><i class="fas fa-list"></i> Project Lists {projects && <span className="new badge red" data-badge-caption="Projects">{projects.length}</span>}</h5>
      { projects && projects.map(project => {
        console.log(`Total Projects Number is ${projects.length}`)
        const colorSet = ['purple', 'pink', 'red', 'indigo', 'cyan', 'green', 'lime', 'amber']
        const colorRandom = (min, max) => {
          return Math.floor(Math.random() * colorSet.length);
        }
          return(
            <Link to={'/project/' + project.id} key={project.id} >
              <ProjectSummary project={project} color={colorSet[colorRandom(0, colorSet.length)]} />
            </Link>
          )
      })}
     </div>
   )
}

export default ProjectList
