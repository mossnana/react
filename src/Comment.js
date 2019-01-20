import React, { Component } from "react";
import { connect } from "react-redux";

// import jquery
import $ from "jquery";

// class comment body
class Comment extends Component {
  constructor(props) {
    super(props);
    this.deleteFunction = this.deleteFunction.bind(this);
  }
  
  // delete comment function
  deleteFunction(e) {
    // prevent default action from submit action
    e.preventDefault();
    // send delete action and id to dispatch and
    this.props.dispatch({
      type: "delete_comment",
      id: this.props.comment.id
    });
    // remove delete comfirm background
    $("div").removeClass("modal-backdrop fade show");
  }

  render() {
    return (
      {/* comment body with HTML Code */}
      <div className="card mt-2">
        <div className="card-header">{this.props.comment.name}</div>
        <div className="card-body">
          <div className="row">
            <div className="col-9">
              <blockquote className="blockquote mb-0">
                <p>{this.props.comment.message}</p>
                <footer className="blockquote-footer">
                  {this.props.comment.id.toString()}
                </footer>
              </blockquote>
            </div>
            <div className="col-3">
              {/* delete button */}
              <a
                className="btn btn-danger mr-1"
                data-toggle="modal"
                data-target="#myModal"
              >
                <i className="far fa-trash-alt" />
              </a>
              {/* edit button and edit event onClick */}
              <span>
                <a
                  className="btn btn-warning"
                  onClick={() =>
                    this.props.dispatch({
                      type: "edit_comment",
                      id: this.props.comment.id
                    })
                  }
                >
                  <i className="far fa-edit" />
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Delete Comfirm Dialog : default hided */}
        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close ml-0"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
                <h6 className="modal-title" id="myModalLabel">
                  ลบคอมเม้น ?
                </h6>
              </div>
              <div className="modal-body">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>{this.props.comment.message}</p>
                    <footer className="blockquote-footer">
                      {this.props.comment.id.toString()}
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  ยกเลิก
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.deleteFunction}
                >
                  ยืนยัน
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
             {/* connect with redux */}   
export default connect()(Comment);
