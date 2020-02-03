import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavbarBS.css";

export default class NavbarBS extends Component {
  state = {
    navbvarBgColor: "transparent"
  };

  componentDidMount = event => {
    console.log("Mounted " + event);
    window.addEventListener("scroll", this.bgColorOnScroll);
  };

  componentWillUnmount() {
    window.onscroll = null;
  }

  bgColorOnScroll = event => {
    console.log(document.documentElement.scrollTop);
    document.documentElement.scrollTop < 50
      ? this.setState({ navbvarBgColor: "transparent" })
      : this.setState({ navbvarBgColor: colorBackground });
  };

  bgColorOnClick = event => {
    console.log(event.target.parentElement.className);

    if (document.documentElement.scrollTop < 50) {
      event.target.parentElement.className.includes("collapsed") ||
      event.target.className.includes("collapsed")
        ? this.setState({ navbvarBgColor: colorBackground })
        : this.setState({ navbvarBgColor: "transparent" });
    }
  };

  render() {
    return (
      <div>
        <Navbar
          className="transition"
          style={{ background: this.state.navbvarBgColor }}
          fixed="top"
          collapseOnSelect
          expand="md"
          variant="dark"
        >
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={this.bgColorOnClick}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="hoverItem" href="#features">
                Features
              </Nav.Link>
              <Nav.Link className="hoverItem" href="#pricing">
                Pricing
              </Nav.Link>
              <NavDropdown
                className="hoverItem"
                alignRight
                title="Dropdown"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="hoverItem" href="#action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className="hoverItem" href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className="hoverItem" href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="hoverItem" href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const colorBackground = "#444444";
