import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

class MainLayout extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
