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
		return (
			<div className="welcome-container"> 
			<LoginContainer /> 
			<CreateAccountContainer />
			</div>
		)
	}
}

export default WelcomeContainer;