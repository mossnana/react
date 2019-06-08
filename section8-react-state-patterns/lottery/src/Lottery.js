import React, { Component } from "react";
import Ball from "./Ball";
import "./css/lottery.css";

class Lottery extends Component {
  // Default Props
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);
    this.state = {
      /*
      Make array width from props number
      */
      nums: Array.from({ length: this.props.maxBalls })
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
    return this.state.nums;
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
