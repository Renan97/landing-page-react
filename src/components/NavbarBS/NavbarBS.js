import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavbarBS.css';

export default class NavbarBS extends Component {
	state = {
		navbvarBgColor: 'transparent'
	};

	componentDidMount = (event) => {
		console.log('Mounted ' + event);
		window.addEventListener('scroll', this.bgColorOnScroll);
	};

	componentWillUnmount() {
		window.onscroll = null;
	}

	bgColorOnScroll = (event) => {
		console.log(document.documentElement.scrollTop);
		document.documentElement.scrollTop < 50
			? this.setState({ navbvarBgColor: 'transparent' })
			: this.setState({ navbvarBgColor: '#444444' });
		// return { backgroundColor: this.state.navbvarBgColor };
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
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
							<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Nav.Link href="#deets">More deets</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Dank memes
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}
