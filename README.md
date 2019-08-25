# Redux

## Pre-course Redux

### Pure functions and Impure functions

- Pure functions take arguments and return values based on those argument

```javascript
const add = (a, b) => {
    return a + b;
}
```

- Impure functions an mutate things from outside their scope or produce side effects.

```javascript
const b;

// function add รับค่าเข้าไปแค่ a แต่กับทำนอกเหนือจาก บริบท เพราะในความเป็นจริงควร return มาแค่ a ตัวเดียว
const add = a => {
    return a + b;
}

// function add ไม่ได้แค่บวกค่า a กับ b แต่ทำการ console.log() สึ่งเป็นคำสั่งที่อยู่นอกเหนือบริบทของคำสั่งที่ให้ทำการบวกกัน
const add = (a, b) => {
    console.log('another command !!!')
    return a + b;
}

// function นี้ไม่ได้ทำการ return ค่าบวก แต่เป็นการทำให้เกิด callback (side effect)
const add = (a, b) => {
    Api.post('/add', {a, b}, (res) => {
        // Callback ...
    })
}
```



### Not Mutating Objects and Arrays

- การ copy ของ object หรือ array ที่แท้จริง

```javascript
const original = {a: 1, b: 2};
const copy = Object.assign({}, original)

// หรือ
const copy2 = {...original}
```

- การขยาย object หรือ array

```javascript
// Object Extention
const original = {a: 1, b: 2};
const extension = {c: 3}
const copy = Object.assign({}, original, extension)
// Array Extension
const original = [1, 2];
const extension = original.concat(4)
const more = originl.concat([4, 5])

// หรือ
const copy2 = {...original, ...extension}
```



### Redux without React

#### What is Redux Concept ?

- The whole state tree of your application is kept in one store.
- Just one plain old javascript object.

#### Reducer Function

```mathematica
ReducerFunction(Action, Init State) = New State
```

- New State &rarr; New View &rarr; (Action Creator Function) &rarr; Action &rarr; RF(Action, Init State) &rarr; New State 2

  - New State, New View : เมื่อมีการกระตุ้นเหตุการณ์ใหม่
  - Action Creator Function (Middleware) : Function จะทำงานตาม logic ที่กำหนดตาม event แต่ return ค่าออกมาเป็น pure function ที่ใช้ในการ update state เท่านั้น
  - Action (pure function) : ที่ใช้ในการ Update Init State เท่านั้น

- ตัวอย่างเช่น

- ```mathematica
  ReducerFunction(<View />, State) = New <View />
  ```



## Redux Functions Overview

```javascript
applyMiddleware: function()
bindActionCreators: function()
combineReducers: function()
compose: function()
createStore: function()
```



## Redux and React

- File รวม

```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import "./styles.css";

const initState = {
  number: 1
};

const addValue = () => ({
  type: "ADD"
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return { number: state.number + 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

class App extends Component {
  render() {
    const { number, add } = this.props;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>{number}</h2>
        <button onClick={add}>+</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    add() {
      dispatch(addValue());
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
);
```

- แบ่งส่วนอธิบาย

  1. สร้าง store

  ```javascript
  import { createStore } from "redux";
  
  const store = createStore();
  ```

  2. สร้าง Reducer function เพื่อรับ action ไปเปลี่ยนแปลง state เริ่มต้น

  ```javascript
  // Initial State
  const initState = {
    number: 1
  };
  
  // Reducer Function
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case "ADD":
        return { number: state.number + 1 };
      default:
        return state;
    }
  };
  ```

  3. เพิ่ม Reducer function ใน store

  ```javascript
  // const store = createStore(--> reducer <--);
  const store = createStore(reducer);
  ```

  4. นำตัวแปร store ไปครอบกับ component ที่ต้องการใช้งาน โดยผ่าน Provider

  ```javascript
  import { Provider } from "react-redux";
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    // Provider from 'react-redux'
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    rootElement
  );
  ```

  5. สามารถนำเอา state ใน store ไปใช้ได้แล้วโดยที่ตอนนี้ state จะเท่ากับ initState

  ```javascript
  state = {
      number: 1
  }
  ```

  6. เมื่ออยู่ใน component ที่อยากใช้งาน เราจะใช้งาน store (state, dispatch) ผ่าน props โดยที่ ....
     - เรียก state ผ่าน function **mapStateToProps**
     - เรียก dispatch ผ่าน function **mapDispatchToProps**

  ```javascript
  import { connect } from "react-redux";
  
  class App extends Component {
    render() {
      const { number, add } = this.props;
      return (
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>{ number }</h2>
          <button onClick={add}> + </button>
        </div>
      );
    }
  }
  
  const addValue = () => ({
    type: "ADD"
  });
  
  const mapStateToProps = state => {
    return state;
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      add() {
        dispatch(addValue());
      }
    };
  };
  
  // AppContainer = App + State + Dispatch
  const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
  ```

  7. ความหมายของ ...

     - mapStateToProps คือนำ new state ที่ได้ return มาจาก Reducer Function - return { number: state.number + 1 };

     ```javascript
     const reducer = (state = initState, action) => {
       switch (action.type) {
         case "ADD":
           return { number: state.number + 1 };
         default:
           return state;
       }
     };
     ```

     - mapDispatchToProps คือการนำ dispatch (ตัวกลางที่จะวิ่งไปหา reducer ใช้กำหนด action) ไปเป็น props ซึ่งเอาไปใช้เป็น event trigger ในการแปลง state ได้

     ```javascript
     // เขียนแบบที่ 1
     const addValue = () => ({
       type: "ADD"
     });
     
     const mapDispatchToProps = dispatch => {
       return {
         add() {
           dispatch(addValue());
         }
       };
     };
     
     // เขียนแบบที่ 2 สมมุติในกรณีที่มี action มากกว่า 1 action
     import { bindActionCreators } from 'redux'
     
     const minusValue = () => ({
       type: "MINUS"
     });
     
     const mapDispatchToProps = dispatch => {
       return bindActionCreators({
           addValue,
           minusValue
       }, dispatch)
     };
     
     // เขียนแบบที่ 3 ในเวอร์ชั่นใหม่ๆ ของ redux สามารถเขียนเป็น plain object ได้เลย
     const mapDispatchToProps = {
         addValue,
         minusValue
     };
     ```



## React-Redux-Thunk

- เพิ่ม middleware เข้าไปใน ขั้นตอนก่อนการ dispatch
- ใช้ในหลายกรณี
  - กรณียอดฮิตคือ async fetch ข้อมูล
- ตัวอย่าง

```javascript
export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createedAt: new Date()
    }).then( () => {
      // dispatch after async fetch data from firebase
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err});
    })
      
  }
};
```

