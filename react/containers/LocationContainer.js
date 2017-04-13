import React from 'react';
import { connect } from 'react-redux';
import LocationHeading from '../components/LocationHeading'
import LocationPhotos from '../components/LocationPhotos'
import Restaurants from '../components/Restaurants'
import Activities from '../components/Activities'
import Accomadations from '../components/Accomadations'


class LocationContainer extends React.Component{
	constructor() {
		super();
		
	}
	render(){
		return (
			<div>
			<p> inside of LocationContainer </p>
			<LocationHeading />
			<LocationPhotos />
			<Restaurants />
			<Activities />
			<Accomadations />
			</div>
		);
	}
}

export default LocationContainer;