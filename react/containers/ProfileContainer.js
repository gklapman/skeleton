import React from 'react';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import UserMap from '../components/Map'
import ProfileMap from '../components/ProfileMap'
import {getLocationInfoThunkCreator} from '../redux/location'
import {browserHistory} from 'react-router'



class ProfileContainer extends React.Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
		
	}

	handleClick(event){
		event.preventDefault()
		let locationId = event.target.value
		this.props.goToLocation(locationId)
		browserHistory.push(`/loggedIn/location/${locationId}`)

	}
	render(){
		let isUser;
		if (this.props.currentUser.id === Number(this.props.params.userId)){
			isUser = <div> 
			<button className="btn btn-default">Add Location</button>
			<button className="btn btn-default">Edit Profile</button>
			</div>
		}
		return (
			<div>
			{isUser}
			<UserInfo travelpageInfo = {this.props.travelpageInfo}/>
			<div style={{width: '100%', height: '400px'}}>
				<ProfileMap locations={this.props.travelpageInfo.locations} handleClick={this.handleClick}/>
			</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		travelpageInfo: state.travelpageInfo, 
		currentUser: state.currentUser
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		goToLocation(locationId){
			return dispatch(getLocationInfoThunkCreator(locationId))
		}
		//THIS WILL BE FOR A THUNK TO MAKE REQUEST TO CHECK USER IN DB AND SET CURRENT USER ON STORE STATE
	}
}




export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);