 import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import React from 'react';
import CreateAccount from '../components/CreateAccount'
import {createUserThunkCreator} from '../redux/currentUser'
// import ToolTip from 'react-portal-tooltip'

class CreateAccountContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			additionalAccountDetails: false
		// 	// formEmail: '',
		// 	// formPassword: '',
		// 	// formFirstName: '',
		// 	// formLastName: '',
		// 	// formGender: null,
		// 	// formBirthday: null,
		}
		// this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		// this.handleInitialSubmit = this.handleInitialSubmit.bind(this)
	}

	// handleInitialSubmit(data){
	// 	// console.log(data)
	// 	console.log("create account info", this.props.createaccountInfo)
	// 	this.setState({
	// 		additionalAccountDetails: true
	// 	})
	// }

	handleSubmit(data){
		// event.preventDefault();
		// const email = this.state.formEmail;
		// const password = this.state.formPassword;
		// const firstName = this.state.formFirstName;
		// const lastName = this.state.formLastName;
		// const gender = this.state.formGender;
		// const birthday = this.state.formBirthday;
		// if (!email || !password || !firstName || !lastName){
		// 	alert('Please fill out email, password, first name, and last name')
			// } else {	}
		// console.log('this.props', this.props.createaccountInfo)
		let createaccountInfo = this.props.createaccountInfo.values
		this.props.createUser(createaccountInfo)
		

	}

	// handleChange(event){
	// 	const name = event.target.name
	// 	const value = event.target.value
	// 	this.setState({
	// 		[name]: value
	// 	})
	// }
	render(){
		return (
			<div className="create-account-container"> 
			{/*this.state.additionalAccountDetails ? <CreateAccountDetails onSubmit={this.handleSubmit} /> :
			<CreateAccount onSubmit={this.handleInitialSubmit}/>*/}
			<CreateAccount onSubmit={this.handleSubmit}/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		createaccountInfo: state.form.createaccount,
	

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createUser(createaccountInfo){
			return dispatch(createUserThunkCreator(createaccountInfo))
		}
		
	}
}

		//THIS WILL BE FOR A THUNK TO MAKE REQUEST TO CHECK USER IN DB AND SET CURRENT USER ON STORE STATE



export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountContainer)
