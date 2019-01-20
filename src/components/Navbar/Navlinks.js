import React from "react";

const Navlinks = props => {
  return (
    <li className="nav-item active">
      <a className="nav-link" href={props.link}>
        {props.name}
      </a>
    </li>
  );
};

export default Navlinks;
