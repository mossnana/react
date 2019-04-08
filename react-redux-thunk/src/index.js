import React from "react";
import ReactDOM from "react-dom";
// applyMiddleware is Redux Thunk
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import App from "./App";
import thunk from "redux-thunk";

// redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
