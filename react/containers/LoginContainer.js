import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import React from 'react';
import Login from '../components/Login'
import {loginUserThunkCreator} from '../redux/currentUser'

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state =  
			{formEmail: '', formPassword: ''}
		
		this.emailChange = this.emailChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	emailChange (event){
		this.setState({
			formEmail: event.target.value
		});
	}

	passwordChange (event){
		this.setState({
			formPassword: event.target.value
		})
	}

	handleSubmit(event){
		event.preventDefault();
		const email = this.state.formEmail;
		const password = this.state.formPassword;
		this.props.loginUser(email, password)
	}


	render(){
		const { currentUser } = this.props
		return (
			<div className="login-container"> 
			<Login emailChange={this.emailChange} passwordChange={this.passwordChange} handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		currentUser: state.currentUser
	}
	
}
//NOT GOING TO HAVE A CURRENT USER AT THIS POINT... POSSIBLE FUTURE HERE WITH REQ.SESSION

const MapDispatchToProps = (dispatch) => {
	return {
		loginUser(email, password){
			return dispatch(loginUserThunkCreator(email, password))
		}
		//THIS WILL BE FOR A THUNK TO MAKE REQUEST TO CHECK USER IN DB AND SET CURRENT USER ON STORE STATE
	}
}


export default connect(mapStateToProps, MapDispatchToProps)(LoginContainer);