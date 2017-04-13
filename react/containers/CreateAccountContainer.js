import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import React from 'react';
import CreateAccount from '../components/CreateAccount'

class CreateAccountContainer extends React.Component {
	constructor() {
		super();
		
	}
	render(){
		console.log('inside of CreateAccount container')
		return (
			<div className="create-account-container"> 
			<p> rendering the createaccount Container</p>
			<CreateAccount /> 
			
			</div>
		)
	}
}

export default CreateAccountContainer;