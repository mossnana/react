import React, { Component } from "react";
import Lottery from "./Lottery";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery />
        <Lottery title="Mini Daily Challenge" maxBalls={4} />
      </div>
    );
  }
}

export default App;
