import React from 'react';
import { Link, browserHistory } from 'react-router';

export default function Navbar (props){
	//need the current user
	// let userId = props.userId
	const userId = props.currentUser.id
	const logout = props.logout
	console.log('logout ', logout)
	return (
		<nav className="navigation navbar-default">
				<form className="navbar-form " role="search">
					<div className='navbar-item'>
						<input type="text" className="form-control" placeholder="Search"/>
					</div>
					<button className='navbar-item' type="submit" className="btn btn-default">Submit</button>
				</form>
				<div className="logo">
					<h1 className="glyphicon glyphicon-plane icon"></h1>
					<h1 className="navbar-item logo">rvlPage</h1>
				</div>
				<ul className="nav navbar-nav navbar-item">
					<li>
						<Link to='/loggedIn/travelfeed' activeClassName="active"> <span className="text" >Home</span></Link>
					</li>
					<li>
						<Link to={`/loggedIn/profile/${userId}`}> <span className="text">My TrvlPage</span></Link>
					</li>
					<li>
						<Link to='/loggedIn/profile/1'> <span className="text">Notifications</span></Link> {/*THIS WILL NEED TO GO TO NOTIFICATIONS*/}
					</li>
					<li>
						<button className="btn btn-default navbar-item logout-button" onClick={logout}>Logout</button>
					</li>
				</ul>
		</nav>
	)
}

