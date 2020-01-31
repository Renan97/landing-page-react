import React, { Component } from 'react';
import NavbarBS from './components/NavbarBS/NavbarBS';
import Home from './components/Home';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavbarBS />
				<Home />

				<h1>dasdasdasdas</h1>
				<Home />
			</div>
		);
	}
}

export default App;
