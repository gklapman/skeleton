import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar'


class NavbarContainer extends React.Component{
	constructor() {
		super();
		
	}
	render(){
		console.log('inside of NavbarContainer')
		return (
			<div>
			<Navbar />
			<span> Inside of NavbarContainer</span>
			</div>
		)
	}
}

export default NavbarContainer;