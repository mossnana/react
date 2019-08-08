* เรียน MERN Stack

- MongoDB ฐานข้อมูลใช้ mongoDB Atlas
- Express
- React
- Node.js
- Mongoose ทำให้ใช้ MongoDB กับ Nodejs ได้ง่ายขึ้น

* Database Concepts
SQL | NoSQL
Database | Database
Table | Collection
Row | Document
Index | Index
Join | $lookup
Foreign Key | Reference

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
    
  - สร้าง folder routes ในการกำหนด endpoint
    ... รอการอัพเดท ...
