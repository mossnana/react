// นำเข้า library firebase
import * as firebase from 'firebase';
// เรียกใช้บริการ Google Cloud Firestore
import firestore from 'firebase/firestore'
/*
  ใน Google Cloud Firestore จะมี settings ต่าง ๆ สามารถไปดูได้ที่ 
  https://firebase.google.com/docs/reference/js/firebase.firestore.Settings
  
  ช่วยในการป้องกันการ เทคนิคการตัดคำ (Truncation) เป็นเทคนิคที่ช่วยในการสืบค้นให้ได้ข้อมูลที่กว้างขึ้น 
  ทำให้ Query ข้อมูลได้ดีขึ้น
*/
const settings = {timestampsInSnapshots: true};
// ค่า config เอาได้จากใน Google Firesabe Console
const config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_ID"
};
// ทำการเชื่อมต่อ Google Firebase ด้วยฟังก์ชั่น initializeApp()
firebase.initializeApp(config);
// ตั้งค่า Google Cloud Firestore
firebase.firestore().settings(settings);

export default firebase;
