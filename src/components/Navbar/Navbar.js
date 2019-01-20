import React, { Component } from "react";
import Navlinks from "./Navlinks";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Moc Moc
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Navlinks name="Home" link="/" />
              <Navlinks name="Profile" link="/profile" />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
