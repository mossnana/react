import React, { Component } from 'react';
// นำเข้า dependency ชื่อว่า react-router-dom โดยเอามาเฉพาะฟังก์ชั่น Link
import { Link } from 'react-router-dom';
// นำเข้า library firebase
import firebase from './Firebase';

class App extends Component {
  // สร้าง Constructor ของ component App
  constructor(props) {
    super(props);
    // ตัวแปล "ref" ไว้เก็บข้อมูล Collection ชื่อ "boards"
    this.ref = firebase.firestore().collection('boards');
    // สร้างตัวแปล "unsubscribe" ไว้ก่อน
    this.unsubscribe = null;
    // สร้าง state object ใน component App ไว้ก่อน เก็บ Array ชื่อ "boards"
    this.state = {
      boards: []
    };
  }
  // ฟังก์ชั่น onCollectionUpdate ใช้ในการอัพเดทข้อมูลลง collection ส่งค่า querySnapshot เข้าไป
  onCollectionUpdate = (querySnapshot) => {
    // สร้าง Array ชื่อ boards
    const boards = [];
    /* 
    ทำการ loop ค่า querySnapshot ที่ส่งเข้า
    ค่า querySnapshot แปลงเป็น doc
    */
    querySnapshot.forEach((doc) => {
      // ดึงข้อมูลตัวแปล 1 object เก็บในตัวแปล title, description, author ผ่านฟังก์ชั่น data()
      const { title, description, author } = doc.data();
      // เอา object ใหม่ใส่เข้าไปใน Array ชื่อ boards
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    // เอาข้อมูล array boards อัพเดทใน state App
    this.setState({
      boards
   });
  }
  /* 
  เมื่อมีการ render component App ให้ทำการเก็บค่า unsubscribe เป็น this.ref.onSnapshot() 
  ซึ่ง ฟังก์ชั่น onSnapshot() บน Google Cloud Firestone
  */
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              BOARD LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Board</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                // ลูปข้อมูลใน state
                {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
                    <td>{board.description}</td>
                    <td>{board.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
