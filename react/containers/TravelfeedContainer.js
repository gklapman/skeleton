import React from 'react';
import { connect } from 'react-redux';


class TravelfeedContainer extends React.Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		console.log('inside of TravelFeedContainer!!!')
		return (
			<div>
			<span> Inside of TravelFeedContainer!!!!</span>
			</div>
		)
	}
}

export default TravelfeedContainer;