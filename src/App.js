import React, { Component } from "react";
import NavbarBS from "./components/NavbarBS/NavbarBS";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarBS />
        <Home />
        <div
          style={{ width: "100%", height: "200px", background: "grey" }}
        ></div>
      </div>
    );
  }
}

export default App;
