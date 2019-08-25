ReduxPre-course ReduxPure functions and Impure functionsPure functions take arguments and return values based on those argument

const add = (a, b) => {
    return a + b;
}

Impure functions an mutate things from outside their scope or produce side effects.

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

Not Mutating Objects and Arraysการ copy ของ object หรือ array ที่แท้จริง

const original = {a: 1, b: 2};
const copy = Object.assign({}, original)

// หรือ
const copy2 = {...original}

การขยาย object หรือ array

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

Redux without ReactWhat is Redux Concept ?The whole state tree of your application is kept in one store.

Just one plain old javascript object.

Reducer FunctionReducerFunction(Action, Init State) = New State

New State → New View → (Action Creator Function) → Action → RF(Action, Init State) → New State 2

New State, New View : เมื่อมีการกระตุ้นเหตุการณ์ใหม่

Action Creator Function (Middleware) : Function จะทำงานตาม logic ที่กำหนดตาม event แต่ return ค่าออกมาเป็น pure function ที่ใช้ในการ update state เท่านั้น

Action (pure function) : ที่ใช้ในการ Update Init State เท่านั้น

ตัวอย่างเช่น

ReducerFunction(<View />, State) = New <View />

Redux Functions OverviewapplyMiddleware: function()
bindActionCreators: function()
combineReducers: function()
compose: function()
createStore: function()

Redux and ReactFile รวม

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

แบ่งส่วนอธิบาย

สร้าง store

import { createStore } from "redux";

const store = createStore();

สร้าง Reducer function เพื่อรับ action ไปเปลี่ยนแปลง state เริ่มต้น

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

เพิ่ม Reducer function ใน store

// const store = createStore(--> reducer <--);
const store = createStore(reducer);

นำตัวแปร store ไปครอบกับ component ที่ต้องการใช้งาน โดยผ่าน Provider

import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // Provider from 'react-redux'
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
);

สามารถนำเอา state ใน store ไปใช้ได้แล้วโดยที่ตอนนี้ state จะเท่ากับ initState

state = {
    number: 1
}

เมื่ออยู่ใน component ที่อยากใช้งาน เราจะใช้งาน store (state, dispatch) ผ่าน props โดยที่ ....

เรียก state ผ่าน function mapStateToProps

เรียก dispatch ผ่าน function mapDispatchToProps

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

ความหมายของ ...

mapStateToProps คือนำ new state ที่ได้ return มาจาก Reducer Function - return { number: state.number + 1 };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return { number: state.number + 1 };
    default:
      return state;
  }
};

mapDispatchToProps คือการนำ dispatch (ตัวกลางที่จะวิ่งไปหา reducer ใช้กำหนด action) ไปเป็น props ซึ่งเอาไปใช้เป็น event trigger ในการแปลง state ได้

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

React-Redux-Thunkเพิ่ม middleware เข้าไปใน ขั้นตอนก่อนการ dispatch

ใช้ในหลายกรณี

กรณียอดฮิตคือ async fetch ข้อมูล

ตัวอย่าง

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

