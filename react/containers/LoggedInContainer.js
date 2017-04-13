import React from 'react';
import { connect } from 'react-redux';
import NavBarContainer from './NavBarContainer'


class LoggedInContainer extends React.Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		console.log('the children are...', this.props)
		return (
			<div>
			<NavBarContainer />
			{this.props.children}
			</div>
		)
	}
}

export default LoggedInContainer;