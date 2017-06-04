 import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import React from 'react';
import AccountDetails from '../components/AccountDetails'
import {additionalInfoThunkCreator} from '../redux/currentUser'
// import ToolTip from 'react-portal-tooltip'

class AccountDetailsContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			// additionalAccountDetails: false
		// 	// formEmail: '',
		// 	// formPassword: '',
		// 	// formFirstName: '',
		// 	// formLastName: '',
		// 	// formGender: null,
		// 	// formBirthday: null,
		}
		// this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.skip = this.skip.bind(this)
		// this.handleInitialSubmit = this.handleInitialSubmit.bind(this)
	}

	handleSubmit(){
		let additionalInfo = this.props.accountDetails.values
		let userId = this.props.currentUser.id
		this.props.additionalInfo(additionalInfo, userId)
	}

	skip(){
		const path = '/loggedIn/travelfeed' //will make this go to upload prof pic? and add locations
			browserHistory.push(path)
	}

	render(){
		return (
			<div className="create-account-container"> 
			<AccountDetails onSubmit={this.handleSubmit} skip={this.skip}/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		accountDetails: state.form.createaccountdetails,
		currentUser: state.currentUser

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		additionalInfo(additionalInfo, userId){
			return dispatch(additionalInfoThunkCreator(additionalInfo, userId))
		}
		
	}
}

	



export default connect(mapStateToProps, mapDispatchToProps)(AccountDetailsContainer)

