import React, { Component } from "react";
import { connect } from "react-redux";

class EditComment extends Component {
  constructor(props) {
    super(props);
    this.getName = React.createRef();
    this.getComment = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newName = this.getName.current.value;
    const newMessage = this.getComment.current.value;
    const data = {
      newName,
      newMessage
    };
    console.log(data);
    this.props.dispatch({
      type: "update_comment",
      id: this.props.comment.id,
      data: data
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
              defaultValue={this.props.comment.name}
            />
          </div>
          <div className="form-group text-center">
            <label>แสดงความคิดเห็น</label>
            <textarea
              className="form-control"
              placeholder="ความคิดเห็น"
              rows="5"
              ref={this.getComment}
              defaultValue={this.props.comment.message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary form-control">
              แก้ไขความคิดเห็น
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(EditComment);
