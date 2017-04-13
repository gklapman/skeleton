import React from 'react';
import { connect } from 'react-redux';


class ProfileContainer extends React.Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		console.log('inside of ProfileContainer')
		return (
			<div>
			<span> Inside of ProfileContainer</span>
			</div>
		)
	}
}

export default ProfileContainer;