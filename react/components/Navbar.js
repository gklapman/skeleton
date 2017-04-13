import React from 'react';
import { Link, browserHistory } from 'react-router';

export default function Navbar (props){
	//need the current user
	// let userId = props.userId

	return (
		<nav className="navbar navbar-default">
			<div className="container">
				<form className="navbar-form navbar-left" role="search">
					<div>
						<input type="text" className="form-control" placeholder="Search"/>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
				<ul className="nav navbar-nav navbar-right">
					<li>
						<Link to='/loggedIn/travelfeed' activeClassName="active">Home</Link>
					</li>
					<li>
						<Link to='/loggedIn/profile/1'>LINK TO PROFILE</Link>
						{/*<Link to={`/loggedIn/profile/${userId}`} activeClassName="active">My Profile</Link>*/}
					</li>
					<li>
						<Link to='/loggedIn/profile/1'>Notifications </Link> {/*THIS WILL NEED TO GO TO NOTIFICATIONS*/}
					</li>
				</ul>
			</div>
		</nav>
	)
}

