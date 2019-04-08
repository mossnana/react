import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    e.preventDefault();
    console.log("handleChange function");
    this.setState(
      {
        [e.target.id]: e.target.value
      },
      () => {
        console.log("state = ", this.state);
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit function");
    console.log("project information", this.state);
    this.props.createProject(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Project Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <input type="text" id="content" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  console.log("Map Dispatch to Props Function");
  console.log("Dispatch Function", dispatch);
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
