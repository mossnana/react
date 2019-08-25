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
