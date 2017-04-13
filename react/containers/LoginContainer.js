import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import React from 'react';
import Login from '../components/Login'
import {LoginUserThunkCreator} from '../redux/currentUser'

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = 
		Object.assign({},
			props.currentUser, 
			{formEmail: '', formPassword: ''}
		)
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
		this.props.LoginUser(email, password)
	}


	render(){
		console.log('inside of login container and the props are ', this.props)
		console.log('inside of the login container and the state is ', this.state)
		const { currentUser } = this.props
		console.log('inside of welcome container')
		return (
			<div className="login-container"> 
			<p> rendering the Login Container</p>
			<Login emailChange={this.emailChange} passwordChange={this.passwordChange} handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log('state', state)
	return {
		currentUser: state.currentUser
	}
	
}
//NOT GOING TO HAVE A CURRENT USER AT THIS POINT... POSSIBLE FUTURE HERE WITH REQ.SESSION

const MapDispatchToProps = (dispatch) => {
	return {
		LoginUser(email, password){
			console.log('the email and password inside Login User are', email, password)
			return dispatch(LoginUserThunkCreator(email, password))
		}
		//THIS WILL BE FOR A THUNK TO MAKE REQUEST TO CHECK USER IN DB AND SET CURRENT USER ON STORE STATE
	}
}


export default connect(mapStateToProps, MapDispatchToProps)(LoginContainer);