import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar'
import {logoutThunkCreator} from '../redux/currentUser'

class NavbarContainer extends React.Component{
	constructor() {
		super();
		this.state ={
			searchForm: ''
		}
	}
	render(){
		console.log('the props inside of navbar are ', this.props)
		return (
			<div>
			<Navbar currentUser={this.props.currentUser} logout={this.props.logout}/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		currentUser: state.currentUser
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout(){
			return dispatch(logoutThunkCreator())
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);