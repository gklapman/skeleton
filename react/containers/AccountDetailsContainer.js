 import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import React from 'react';
import AccountDetails from '../components/AccountDetails'
import {additionalInfoThunkCreator} from '../redux/currentUser'
import ProfPic from '../components/ProfPic'
import {postProfThunkCreator} from '../redux/travelpage'
// import ToolTip from 'react-portal-tooltip'

class AccountDetailsContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			profilePic: false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.next = this.next.bind(this)
		this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this)
		this.skipAdditional = this.skipAdditional.bind(this)
		
	}

	handleSubmit(){
		let additionalInfo = this.props.accountDetails.values
		let userId = this.props.currentUser.id
		this.props.additionalInfo(additionalInfo, userId)
		this.setState({profilePic: true})
	}

	handlePhotoSubmit(evt) {
	let userId = this.props.currentUser.id
	Promise.resolve(postProfThunkCreator(evt.target.files[0], userId))
	.then(res => {
	   console.log('this is the res', res)
	 	})

	}

	next(){
		const path = '/loggedIn/travelfeed' //will make this go to upload prof pic? and add locations
			browserHistory.push(path)
	}

	skipAdditional(){
		this.setState({profilePic: true})
	}

	render(){
		return (
			<div className="create-account-container"> 
				{this.state.profilePic ? <ProfPic handlePhotoSubmit={this.handlePhotoSubmit} next={this.next} /> : 
				<AccountDetails onSubmit={this.handleSubmit} skipAdditional={this.skipAdditional}/>}
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

