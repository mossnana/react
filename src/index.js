import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import commentReducer from "./commentReducer";
import { Provider } from "react-redux";
import "./styles.css";
import App from "./App";

// Create Store from Redux สร้างคลังข้อมูล
const store = createStore(commentReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
