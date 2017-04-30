import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar'
import {logoutThunkCreator} from '../redux/currentUser'
import Notifications from '../components/notifications'

class NavbarContainer extends React.Component{
	constructor() {
		super();
		this.state ={
			searchForm: '',
			showNotifications: false,
			notifications: []
		}
		this.notificationsView = this.notificationsView.bind(this)
	}

	notificationsView(){
		let notsInfo = this.props.notifications.notificationsInfo;
		let userInfo = this.props.notifications.userInfo;
		let holder = [];
		for (var i = 0; i < notsInfo.length; i++){
			let notiObj = {type: notsInfo[i].type, user_first: userInfo[i].first_name, user_last: userInfo[i].last_name, id: notsInfo[i].id, userId: userInfo[i].id}
			holder.push(notiObj)
		}
		this.setState({
			showNotifications: !this.state.showNotifications,
			notifications: holder
		})
	}



	render(){
		return (
			<div className="nav-holder">
			<Navbar currentUser={this.props.currentUser} logout={this.props.logout} notificationsView={this.notificationsView}/>
			{this.state.showNotifications ?
			<Notifications notifications={this.state.notifications} /> : null}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		currentUser: state.currentUser,
		notifications: state.notifications,
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