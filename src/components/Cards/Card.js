import React from "react";

const Card = props => {
  const cardStyle = {
    margin: "10px"
  };

  const imgStyle = {
    width: "300px"
  };

  return (
    <div className="card m-2">
      <div className="row">
        <div className="col-12 col-md-4">
          <img className="img-fluid" src={props.src} style={imgStyle} />
        </div>
        <div className="col-12 col-md-8 card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.desc}</p>
          <a href={props.index + 1} class="card-link">
            อ่านเพิ่มเติม
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
