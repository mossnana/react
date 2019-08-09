* เรียน MERN Stack จาก freeCodeCamp

- MongoDB ฐานข้อมูลใช้ mongoDB Atlas
- Express
- React
- Node.js
- Mongoose ทำให้ใช้ MongoDB กับ Nodejs ได้ง่ายขึ้น

* Database Concepts

| SQL | NoSQL |
|-----|:-----:|
| Database | Database |
| Table | Collection |
| Row | Document |
| Index | Index |
| Join | $lookup |
| Foreign Key | Reference |

* MongoDB Cluster with Google Cloud Platform

* Preinstall
```
npm install cors dotenv express mongoose
```

1. สร้าง folder backend มาก่อน
  เราจะทำ backend กันก่อน
  - server.js
  ```javascript
  const express = require('express'); // ช่วยกำหนด Route
  const cors = require('cors'); // ช่วยไม่ให้เกิดปัญหาตอนติดต่อ APIs
  const mongoose = require('mongoose'); // ตัวช่วยติดต่อระหว่าง NodeJs กับ MongoDB
  
  const app = express(); // เรียกใช้ express
  const port = process.env.PORT || 5000; // ใน port 5000

  app.use(cors()); // เรียกใช้ CORS
  app.use(express.json()); // ???

  // ติดต่อกับ MongoDB Atlas ผ่าน Mongoose
  const uri = process.env.ATLAS_URI; // process.env.ATLAS_URI เป็นการเรียกใช้งานตัวแปรใน file .env
  mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
  const connection = mongoose.connection;
  connection.once('open', () => {
      // Connect แบบครั้งเดียว
      console.log('MongoDB database connection successfully');
  })

  // เปิดใช้งาน server ผ่าน port 5000
  app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
  })
  ```
  - folder models
    - user.model.js กับ exercise.model.js แตกต่างกันที่ Scheme
    ```javascript
    // exercise.model.js
    const mongoose = require("mongoose"); // เรียก mongoose
    const Schema = mongoose.Schema; // สร้างโครงร่างฐานข้อมูล (Schema)
    const exerciseSchema = new Schema(
        {
            username: {type: String, required: true},
            description: {type: String, required:true},
            duration: { type: Number, required:true},
            date: {type: Date, required:true}
        },
        {timestamps: true}
    );
    const Exercise = mongoose.model('Exercise',exerciseSchema); // เก็บโครงสร้างไว้ใน Exercise
    module.exports = Exercise; // export ให้สามารถเรียกใช้ได้
    
    // user.model.js
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;
    const userSchema = new Schema(
        {
            username: {
                type: String,
                required: true,
                unique: true,
                trim: true,
                minlength: 3
            }
        },
        {timestamps: true}
    );
    const User = mongoose.model('User',userSchema);
    module.exports = User;
    ```
    
  - สร้าง folder routes ในการกำหนด endpoint เพื่อเริ่มกระบวนการ CRUD กับฐานข้อมูล
    ```javascript
    // users.js
    const router = require('express').Router() // ใช้งาน Function router ของ express
    let User = require('../models/user.model') // เอา User Schema ที่เราสร้างโดย mongoose มาใช้งาน
    
    /* ---------------------- Read ---------------------- */
    // กำหนด endpoint เป็น http://localhost:5000/users/ ใน method แบบ GET
    // ตัว route('/') หมายถึงใน endpoint นี้ /users(ไปกำหนดในไฟล์ index.js)/
    router.route('/').get((req, res) => {
    User.find() // คำสั่งค้นหา find() ซึ่งเป็นคำสั่งใน mongoose ในที่นี้ไม่ได้ใส่ argument ใน find() ทำให้ส่งมาทุก Document ใน Collection นั้นๆ
      .then(users => res.json(users)) // ถ้าสำเร็จให้ส่งค่ากลับมาเป็น JSON
      .catch(err => res.status(400).json(`Error to get users data : + ${err}`)) // ถ้ามีข้อผิดพลาดให้ขึ้นข้อความผิดพลาด
    });
    
    // กำหนด endpoint เป็น http://localhost:5000/users/{user id} ใน method แบบ GET
    // เช่น http://localhost:5000/users/1234 -> ในที่นี้หมายถึง user id: 1234
    router.route('/:id').get((req, res) => {
    // ใน object req ที่ส่งมาประกอบไปด้วยหลายอย่าง หนึ่งในนั้นคือ params -> id อ่านต่อได้ที่หมายเหตุไว้ด้านล่าง
    // findById(id) หา Document โดยใช้ ID ในการหา ซึ่งเป็นคำสั่งใน mongoose
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error to user data id ${req.params.id}`))
    })
    
    /* ---------------------- Create ---------------------- */
    // กำหนด endpoint เป็น http://localhost:5000/users/add ใน method แบบ POST
    // ตัว route('/add') หมายถึงใน endpoint นี้คือ /users(ไปกำหนดในไฟล์ index.js)/add
    router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username})
    newUser.save() // คำสั่งบันทึก save() ซึ่งเป็นคำสั่งใน mongoose
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json(`Error to add users data : ${err}`))
    });
    
    /* ---------------------- Update ---------------------- */
    // กำหนด endpoint เป็น http://localhost:5000/update/{user id} ใน method แบบ POST
    // เช่น http://localhost:5000/update/1234 -> ในที่นี้หมายถึง user id: 1234
    // คอนเซ็บคือ เขียนทับไปเลย โดยการ ....
    router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id) // หาตัว document ก่อนโดยใช้ id หา
      .then(user => { // จากนั้นเอา document -> user มาแก้ไข
          user.username = req.body.username // แก้ไข username ใน object -> user
          user.save() // save() ทับไฟล์เดิม
          .then(() => res.json('Updated !!!'))
          .catch(err => res.json('Error ', err))
      })
      .catch(err => {
          console.log(err)
      })
    })
    
    /* ---------------------- Delete ---------------------- */
    // กำหนด endpoint เป็น http://localhost:5000/{user id} ใน method แบบ DELETE
    // เช่น http://localhost:5000/1234 โดย method DELETE (กำหนดที่ JSON Header)
    // ลบ document นั้น mongoose มีคำสั่งให้อยู่แล้ว
    router.route('/:id').delete((req, res) => {
      User.findByIdAndDelete(req.params.id)
        .then(user => res.json(`Deleted user : ${req.params.id}`));
    })
    
    module.exports = router
    ```
    - จบกระบวนการหลังบ้านในแบบ localhost ต่อไปก็เป็นการพัฒนาในส่วนหน้าบ้าน
    
2. พัฒนาหน้าบ้าน (frontend)
  - ติดตามตอนต่อไป
