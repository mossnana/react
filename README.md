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

5. ไปที่ไฟล์ src/App.js เพื่อ สร้างฟังก์ชั่นที่เกี่ยวกับการจัดการฐานข้อมูล
<p>
  ไปดูได้ที่ไฟล์ src/App.js
  ฟังก์ชั่น onCollectionUpdate โดยรับค่า querySnapshot ซึ่งเป็น Object ที่ได้จากการ Query ซึ่งเป็น Object ที่มาจาก
  ฟังก์ชั่น componentDidMount() ที่ไปเรียกใช้ฟังก์ชั่น onSnapshot() บน Google Cloud Firestone
  ลอง console.log(querySnapshot) ออกมาจะได้ผลลัพท์แบบนี้ 
  
  QuerySnapshot {
  <br />
    docs: Array(1)
    <br />
    empty: (...)
    <br />
    metadata: SnapshotMetadata {hasPendingWrites: false, fromCache: false}
    <br />
    query: (...)
    <br />
    size: (...)
    <br />
    _cachedChanges: null
    <br />
    _cachedChangesIncludeMetadataChanges: null
    <br />
    _firestore: Firestore {_queue: AsyncQueue, INTERNAL: {…}, _config: FirestoreConfig, _databaseId: DatabaseId, _dataConverter: UserDataConverter, …}
    <br />
    _originalQuery: Query {path: ResourcePath, explicitOrderBy: Array(0), filters: Array(0), limit: null, startAt: null, …}
    <br />
    _snapshot: ViewSnapshot {query: Query, docs: DocumentSet, oldDocs: DocumentSet, docChanges: Array(1), mutatedKeys: SortedSet, …}
    <br />
    __proto__: Object
    <br />
    }
    <br />
    ซึ่งข้อมูลจะถูกเก็บอยู่ใน Attibute ชื่อ docs ซึ่งเป็น Array
    
    จากนั้น มาที่ฟังก์ชั่น componentDidMount() เรียกหลังจาก component App render แล้ว
    ต่อด้วย การ loop lists โดยที่ 
    <td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
    ตัว <Link /> เกี่ยวข้องกับการ Route ใน react-router-dom คือ ส่งค่า ${board.key} เข้าไปใน url ซึ่ง
    ทางฝั่ง component Show นั้นจะรับเป็นค่า Props ไปใช้ในตัวมันผ่านตัวแปล {this.props.match.params.id}
    
</p>

6. ต่อไปมาดูที่ src/component/Show.js และ src/component/Delete.js

7. ไปดูต่อไปที่ src/component/Add.js

8. จากนั้นไปดูที่ตัวสุดท้าย src/component/Edit.js

ขอขอบคุณ 
<a href="https://www.djamware.com/post/5bc50ea680aca7466989441d/reactjs-firebase-tutorial-building-firestore-crud-web-application">DJamware > Didin J.</a>
