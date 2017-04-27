import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import React from 'react';
import LoginContainer from './LoginContainer'
import CreateAccountContainer from './CreateAccountContainer'

class WelcomeContainer extends React.Component {
	constructor() {
		super();
		
	}
	render(){
		console.log('inside of welcome container')
		return (
			<div className="welcome-container"> 
			<h1>Welcome to the Unnamed Travel Project</h1>
			<LoginContainer /> 
			<CreateAccountContainer />
			</div>
		)
	}
}

export default WelcomeContainer;