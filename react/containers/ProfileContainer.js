import React from 'react';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import UserMap from '../components/Map'



class ProfileContainer extends React.Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		console.log('the props are ', this.props)
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
			<UserMap locations = {this.props.travelpageInfo.locations} />
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

const mapDispatchToProps = null;
//THIS WILL HAVE DISPATCHES FOR WHEN THEY CLICK ON PROFILE PIC OR CLICK ON LOCATION ETC.





export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);