import React, { Component } from "react";
import CarouselCaption from "react-bootstrap/CarouselCaption";

export default class Home extends Component {
  render() {
    return <div style={homeStyle}></div>;
  }
}

const homeStyle = {
  background: "yellow",
  width: "100vw",
  //   height: "calc(100vh - 56px) ",
  height: "2000px",
  overflowX: "hidden"
};
