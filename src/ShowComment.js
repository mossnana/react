import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import EditComment from "./EditComment";

class ShowComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-6">
        <h1>Show Comment</h1>
        {console.log(this.props.comments)}
        {this.props.comments.map(comment => (
          <div key={comment.id}>
            {comment.editing ? (
              <EditComment comment={comment} key={comment.id} />
            ) : (
              <Comment comment={comment} key={comment.id} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state
  };
};

export default connect(mapStateToProps)(ShowComment);
