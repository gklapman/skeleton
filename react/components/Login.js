import React from 'react';

const Login = (props) => (
	<div className="login">
	{console.log('props for Login', props)}
		<form onSubmit={props.handleSubmit}>
			<div className="form-group">
				<label>Email</label>
				<input 
					onChange={props.emailChange}
					name="email"
					type="email"
					className="form-control"
				/>
			</div>
			<div className="form-group">
				<label>Password</label>
				<input 
					onChange={props.passwordChange}
					name="email"
				type={"text"/*this will be password*/}
					className="form-control"
				/>
			</div>
			<button type="submit" className="btn btn-block btn-primary">Login!</button>
		</form>
	</div>
)

export default Login;