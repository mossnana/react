import React, { Component } from "react";
import firebase from "../Firebase";
import { Link } from "react-router-dom";

class Show extends Component {
  // ต้องมีการรับค่า props เข้ามา เป็นค่าจาก Router
  constructor(props) {
    super(props);
    // ทำให้ state ว่างก่อน
    this.state = {
      board: {},
      key: ""
    };
  }
  
  // เมื่อมีการ render แล้ว ....
  componentDidMount() {
    // สร้างตัวแปร ref มาเชื่อมต่อ collection ชือ boards ใน firebase
    const ref = firebase
      .firestore()
      .collection("boards")
      .doc(this.props.match.params.id);
    // ทำการเรียกฟังก์ชั่น get เพื่อเอาข้อมูลออกมา จากนั้น ....
    ref.get().then(doc => {
      // ถ้าตรวจพบว่ามีข้อมูล
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }
  // ฟังก์ชั่นลบข้อมูล
  delete(id) {
    firebase
      .firestore()
      .collection("boards")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/");
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>
              <Link to="/">Board List</Link>
            </h4>
            <h3 class="panel-title">{this.state.board.title}</h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Description:</dt>
              <dd>{this.state.board.description}</dd>
              <dt>Author:</dt>
              <dd>{this.state.board.author}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">
              Edit
            </Link>
            &nbsp;
            <button
              onClick={this.delete.bind(this, this.state.key)}
              class="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
