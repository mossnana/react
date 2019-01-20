import React, { Component } from "react";
import Card from "./Card";
import pictureStore from "../../store/pictureStore";

class CardList extends Component {
  constructor() {
    super();
    this.state = pictureStore;
  }

  render() {
    return (
      <div className="container">
        {this.state.map((item, index) => {
          return (
            <Card
              src={item.pictureSrc}
              index={index}
              name={item.pictureName}
              desc={item.pictureDesc}
            />
          );
        })}
      </div>
    );
  }
}
export default CardList;
