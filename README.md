# React.js Simple CRUD in Firebase

1. สร้าง Collection
<p>
สร้าง Cloud Firebase Collection สมมุติว่าชื่อ "boards"
boards > {ตัว ID ให้มันสุ่มเอาเอง} > {author: "", description: "", title: ""}
โดยลองสร้างขึ้นมา 3 fields คือ author, description, title
</p>
  
2. สร้าง Project
<p>
  ใช้ npm สร้าง create-react-app โดยลองตั้งชื่อว่า "react-firestore"
</p>

3. import library ที่ชื่อว่า "firebase" เข้ามา แล้วสร้าง file ชื่อว่า src\Firebase.js
<p>
  ไปดูได้ที่ไฟล์ Firebase.js
</p>
  
4. ทำการสร้าง React Router DOM (เส้นทางย่อยแบบ www.xxx.com/xxx)
<p>
  ติดตั้ง dependency ที่ชื่อว่า "react-router-dom"
  ในตัวอย่างจะลองสร้างขึ้นมา 3 (Create.js, Show.js, Edit.js) เอาไว้ใน Folder src/components/.... หน้ารวมหน้า App เป็น 4 หน้า
  จากนั้นไปที่ไฟล์ src/index.js เพื่อไปดูโค้ด
</p>

5. ไปที่ไฟล์ src/App.js
<p>
  ไปดูได้ที่ไฟล์ src/App.js
</p>

ขอขอบคุณ 
<a href="https://www.djamware.com/post/5bc50ea680aca7466989441d/reactjs-firebase-tutorial-building-firestore-crud-web-application">DJamware > Didin J.</a>
