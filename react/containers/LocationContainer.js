import React from 'react';
import { connect } from 'react-redux';
import LocationHeading from '../components/LocationHeading'
import LocationPhotos from '../components/LocationPhotos'
import Restaurants from '../components/Restaurants'
import Activities from '../components/Activities'
import Accomadations from '../components/Accomadations'
import {getLocationInfoThunkCreator} from '../redux/location'
import {browserHistory} from 'react-router'



class LocationContainer extends React.Component{
	constructor(props) {
		super(props);
		// this.reload = this.reload.bind(this)
	}


	// reload(){
	// 	console.log('this needs to run', this.props.locationInfo.location)
	// 	// let locationId = this.props.locationInfo.location.id
	// 	// console.log('browserHistory', browserHistory)
	// 	// this.props.goToLocation(locationId)
	// 	window.location.reload()
	// }

	render(){
		return (
			<div className="location">
			<LocationHeading locationInfo = {this.props.locationInfo.location} userInfo = {this.props.locationInfo.user} />
			<LocationPhotos locationInfo = {this.props.locationInfo.location} userInfo = {this.props.locationInfo.user} currentUser={this.props.currentUser}/>
			<Restaurants locationInfo = {this.props.locationInfo.location} />
			<Activities locationInfo = {this.props.locationInfo.location}/>
			<Accomadations locationInfo = {this.props.locationInfo.location}/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		currentUser: state.currentUser,
		locationInfo: state.locationInfo
	}
}

const mapDispatchToProps = dispatch => {
	return {
			goToLocation(locationId){
			return dispatch(getLocationInfoThunkCreator(locationId))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer)

