import React, { Component } from "react";
import { connect } from "react-redux";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.getName = React.createRef();
    this.getComment = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.getName.current.value;
    const message = this.getComment.current.value;
    const data = {
      id: new Date(),
      name,
      message,
      editing: false
    };

    this.getName.current.value = "";
    this.getComment.current.value = "";

    this.props.dispatch({
      type: "add_comment",
      data
    });
  }

  render() {
    return (
      <div className="col-6 sticky-top">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group text-center">
            <label>ชื่อ นามสกุล</label>
            <input
              type="text"
              className="form-control"
              placeholder="ชื่อ นามสกุล"
              ref={this.getName}
            />
          </div>
          <div className="form-group text-center">
            <label>แสดงความคิดเห็น</label>
            <textarea
              className="form-control"
              placeholder="ความคิดเห็น"
              rows="5"
              ref={this.getComment}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary form-control">
              ส่งความคิดเห็น
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(CommentForm);
