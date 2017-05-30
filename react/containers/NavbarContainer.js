import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar'
import {logoutThunkCreator} from '../redux/currentUser'
import Notifications from '../components/notifications'
import axios from 'axios'
import {getSearchResultsThunkCreator} from '../redux/search'
import {getNotificationsThunkCreator} from '../redux/notifications'
import {browserHistory} from 'react-router'

class NavbarContainer extends React.Component{
	constructor() {
		super();
		this.state ={
			search: '',
			showNotifications: false,
			notifications: []
		}
		this.notificationsView = this.notificationsView.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.acceptBuddyRequest = this.acceptBuddyRequest.bind(this)
	}

	handleChange(event) {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const searcheditem= this.state.search
    console.log('search item', searcheditem)
    this.props.search(searcheditem)
    this.setState({
    	search: ''
    })
    browserHistory.push(`/loggedIn/search`)
    }

	notificationsView(){
		let notsInfo = this.props.notifications.notificationsInfo;
		let userInfo = this.props.notifications.userInfo;
		let holder = [];
		for (var i = 0; i < notsInfo.length; i++){
			console.log('notsInfo ', notsInfo)
			let notiObj = {type: notsInfo[i].type, user_first: userInfo[i].first_name, user_last: userInfo[i].last_name, id: notsInfo[i].id, userId: userInfo[i].id}
			holder.push(notiObj)
		}
		this.setState({
			showNotifications: !this.state.showNotifications,
			notifications: holder
		})
	}

	acceptBuddyRequest(event){
		console.log('buddy id ', event.target.value)
		let userId = event.target.value
		axios.put(`/api/travelpage/${userId}/buddyresponse`, {status: 'approved'})
		.then(() => {
			console.log('buddy one')
			axios.delete(`/api/travelpage/${userId}/buddyresponse`)

		})
		.then(()=>{
			console.log('made it')
			this.props.getNotifications()
		})
		.catch(err => console.log(err))
	}



	render(){
		console.log('Nav bar console log working')
		return (
			<div className="nav-holder">
			<Navbar currentUser={this.props.currentUser} 
				logout={this.props.logout} 
				notificationsView={this.notificationsView}
				handleSubmit ={this.handleSubmit}
				handleChange ={this.handleChange}
				searchVal={this.state.search}/>
				{this.state.showNotifications ?
				<Notifications notifications={this.state.notifications} acceptBuddyRequest={this.acceptBuddyRequest} /> : null}
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
		},
		search(searcheditem){
			return dispatch(getSearchResultsThunkCreator(searcheditem))
		}, 
		getNotifications(){
			return dispatch(getNotificationsThunkCreator())
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);