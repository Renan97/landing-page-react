import React, { Component } from "react";
import homeImage from "../images/home.jpg";

export default class Home extends Component {
  render() {
    return <div style={homeStyle} />;
  }
}

const homeStyle = {
  // background: "grey",
  width: "100vw",
  height: "100vh",
  overflowX: "hidden",
  background: "url(" + homeImage + ") no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover"
};
