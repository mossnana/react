import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProject } from '../../store/actions/projectActions'
// Redirect when login yet
import { Redirect } from 'react-router-dom'

class EditProject extends Component {
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.updateProject(this.state)
        this.props.history.push('/')
    }

    componentDidMount() {
      const { project, id } = this.props
      this.setState({
        id: id,
        title: project.title,
        content: project.content
      })
    }

     render() {
       const { auth, project } = this.props
       console.log(project)
       if (!auth.uid) return <Redirect to='/signin'/>
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
               <h5 className="grey-text text-darken-3">Create a New Project</h5>
                 <div className="input-field">
                   <label htmlFor="title">Project Title</label>
                   <input type="text" id="title" onChange={this.handleChange} defaultValue={project.title} />
                 </div>
                 <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <input type="text" id="content"	onChange={this.handleChange} defaultValue={project.content} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProject: (project) => dispatch(updateProject(project))
  }
}
// Receive Auth State from redux
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


export default connect(mapStateToProps, mapDispatchToProps)(EditProject)
