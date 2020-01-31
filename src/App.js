import React, { Component } from "react";
import NavbarBS from "./components/NavbarBS";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  componentDidMount() {
    window.onscroll = function() {
      if (window.pageYOffset === 0) {
        alert("I AM AT THE TOP");
      }
    };
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return (
      <div className="App">
        <NavbarBS />[
        <Home />]
      </div>
    );
  }
}

export default App;
