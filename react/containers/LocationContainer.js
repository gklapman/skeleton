import React from 'react';
import { connect } from 'react-redux';
import LocationHeading from '../components/LocationHeading'
import LocationPhotos from '../components/LocationPhotos'
import Restaurants from '../components/Restaurants'
import Activities from '../components/Activities'
import Accomadations from '../components/Accomadations'
import {MapContainer} from '../containers/MapContainer'


class LocationContainer extends React.Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		return (
			<div className="location">
			<LocationHeading locationInfo = {this.props.locationInfo.location} userInfo = {this.props.locationInfo.user}/>
			<LocationPhotos />
			<Restaurants locationInfo = {this.props.locationInfo.location} />
			<Activities locationInfo = {this.props.locationInfo.location}/>
			<Accomadations locationInfo = {this.props.locationInfo.location}/>
			<MapContainer/>
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
		//will probably need some functions to dispatch edits to location if current user
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer)