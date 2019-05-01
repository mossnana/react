import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
// Redirect when login yet
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/')
    }


     render() {
       const {auth} = this.props
       if (!auth.uid) return <Redirect to='/signin'/>
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
               <h5 className="grey-text text-darken-3">Create a New Project</h5>
               <br/>
                <div className="input-field">
                  <label htmlFor="title">Project Title</label>
                  <input type="text" id="title" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <input type="text" id="content" data-length="120" onChange={this.handleChange} />
                </div>
                <div className="input-field right-align">
                    <button className="btn green lighten-1 z-depth-0"><i class="fas fa-pencil-alt"></i> Create</button>
                    &nbsp; &nbsp;
                    <Link to="/" className="btn pink lighten-1 z-depth-0"><i class="fas fa-times"></i> Cancel</Link>
                </div>
              </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createProject: (project) => dispatch(createProject(project))
  }
}
// Receive Auth State from redux
const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}



  export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
