```javascript

```

**


# Advance Web Frontend

## บทที่ 4
### Advance Props & State
#### PropsTypes ประเภทของตัวแปร
- ช่วยให้ไม่มีปัญหาเรื่องการ Error จากชนิดของตัวแปร
- วิธีการใช้งาน
  1.  ลง library ชื่อ prop-types
  ```console
  npm install **prop-types**
  or
  yarn add prop-types
  ```
  2. import **prop-types** เข้ามาใช้งาน
  ```javascript
  import PropTypes from 'prop-types'
  ```
  3. รูปแบบการใช้
  ```javascript
  \\ แบบที่ 1
  class Hello extends React.Component {
    static propTypes = {
      ชื่อ Prop: type ที่กำหนด,
      ชื่อ Prop: type ที่กำหนด
    }
    render(){
      return ...
    }
  }
  
  \\ แบบที่ 2
  Component.propTypes = {
    ชื่อ Prop: type ที่กำหนด,
    ชื่อ Prop: type ที่กำหนด
  }
  ```
  4. Types ที่ใช้บ่อย
  ```javascript
  PropTypes.array
  PropTypes.bool
  PropTypes.func
  PropTypes.number
  PropTypes.object
  PropTypes.string
  PropTypes.bool
  ```
