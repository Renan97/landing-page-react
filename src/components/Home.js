import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return <div style={homeStyle} />;
	}
}

const homeStyle = {
	background: 'grey',
	width: '100vw',
	//   height: "calc(100vh - 56px) ",
	height: '2000px',
	overflowX: 'hidden'
};
