import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteProject } from '../../store/actions/projectActions'
import { Link } from 'react-router-dom'

const ProjectDetails = (props) => {
  // const id = props.match.params.id;
  // console.log(props)
  const { project, auth, id, deleteProject } = props
  if (!auth.uid) return <Redirect to='/signin'/>
  if(project){
    return(
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>Posted by {project.authorFirstName} 	{project.authorLastName}</div>
                <div>{moment(project.createedAt.toDate()).calendar()}</div>
                <br/>
                <div className="right-align">
                  <Link to={'/editproject/' + id} key={id}>
                    <button className="btn waves-effect waves-light"><i class="far fa-edit"></i> Edit</button>
                  </Link>
                    <button className="btn waves-effect waves-light red" onClick={() =>
                          { if (window.confirm('Are you sure to delete this project ?'))
                            {
                              deleteProject(id)
                              props.history.push('/')
                            }
                          }
                        }
                      >
                      <i class="fas fa-trash-alt"></i> Delete
                    </button>
                  </div>
            </div>
        </div>
    </div>
    )
  }
  else{
    return (
      <div className="container center">
        <p>Loading project</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth,
    id: id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProject: id => dispatch(deleteProject(id))
  }
}

export default compose(
 connect(mapStateToProps, mapDispatchToProps),
 firestoreConnect([
  { collection: 'projects' }
 ])
)(ProjectDetails)
