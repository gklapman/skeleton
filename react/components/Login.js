 import React from 'react';

const Login = (props) => (
	<div className="login">
		<h1 className="glyphicon glyphicon-plane login-item logo">rvlPage</h1>
		<form onSubmit={props.handleSubmit}>
			<div className="login-item">
				<label>Email</label>
				<input 
					onChange={props.emailChange}
					name="email"
					type="email"
					className="form-control"
				/>
			</div>
			<div className="login-item">
				<label>Password</label>
				<input 
					onChange={props.passwordChange}
					name="passowrd"
					type="password"
					className="form-control"
				/>
			</div>
			<button type="submit" className="btn btn-block btn-primary login-item login-btn">Login!</button>
		</form>
	</div>
)

export default Login;