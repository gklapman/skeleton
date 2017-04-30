import React from 'react';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import UserMap from '../components/Map'
import ProfileMap from '../components/ProfileMap'
import {getLocationInfoThunkCreator} from '../redux/location'
import {postProfThunkCreator} from '../redux/travelpage'
import {browserHistory, Link} from 'react-router'
import axios from 'axios'



class ProfileContainer extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			showUpload: false
		}
		this.handleClick = this.handleClick.bind(this)
		this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this)
		this.changeUpload = this.changeUpload.bind(this)
		this.reload = this.reload.bind(this)
		this.addbuddy = this.addbuddy.bind(this)
		
	}

	handlePhotoSubmit(evt) {
	let userId = this.props.currentUser.id
	Promise.resolve(postProfThunkCreator(evt.target.files[0], userId))
	.then(res => {
	   console.log('this is the res', res)
	 	})

	}

	changeUpload(){
	this.setState({
		showUpload: !this.state.showUpload
	})
}

	reload(){
		window.location.reload()
	}

	handleClick(event){
		event.preventDefault()
		let locationId = event.target.value
		this.props.goToLocation(locationId)
		browserHistory.push(`/loggedIn/location/${locationId}`)

	}

	addbuddy(event){
		let buddyId = event.target.value
		let userId = this.props.currentUser.id
		axios.post(`/api/travelpage/${userId}/addbuddy`, {buddyId})
		.then(request => {
			window.location.reload()
		})
	}

	render(){
		
		
		let isUser;
		if (this.props.currentUser.id === Number(this.props.params.userId)){
			isUser = <div> 
			<button className="btn btn-default">Add Location</button>
			<button className="btn btn-default">Edit Profile</button>
			<button className="btn btn-default upload-prof" onClick={this.changeUpload}>Upload Profile Picture</button>
			{this.state.showUpload ? 
			<div>
				<input type="file" name="imgS3" accept="image/*" onChange={this.handlePhotoSubmit}/>
				<button onClick={this.reload}className="btn btn-default">Upload</button>
			</div> : null}
			</div>
		}
		return (
			<div className='profile-overall'>
				{isUser}
				<div className="map" style={{width: '100%', height: '600px'}}>
					<ProfileMap 
					locations={this.props.travelpageInfo.locations} 
					handleClick={this.handleClick} 
					travelpageInfo={this.props.travelpageInfo} 
					addbuddy={this.addbuddy} 
					currentUser={this.props.currentUser}/>
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