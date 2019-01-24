import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// นำเข้า dependency ชื่อว่า react-router-dom โดยเอามาเฉพาะฟังก์ชั่น BrowserRouter -> Router และ BrowserRouter -> Route
import { BrowserRouter as Router, Route } from 'react-router-dom';
// อันนี้ไม่ต้องใส่ก็ได้ แค่ใส่ Bootstrap เพื่อความสวยงามเฉย ๆ
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// นำเข้า Component ปลายทางที่เราอยากอ้างถึง
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
// ทำการ Render
ReactDOM.render(
  // เอา <Router> </Router> คุมทั้งหมดเอาไว้
  <Router>
      <div>
        // <Route> ใช้ในการกำหนดเส้นทางไปยัง Component ต่าง ๆ 
        // Route หลัก ให้ใส่ exact เข้าไปด้วยเป็นการบังคับเส้นทาง
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
      </div>
  </Router>,
  document.getElementById('root')
);
