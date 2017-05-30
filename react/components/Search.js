import React from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'

const Search = ({currentUser, searchResults}) => {
	

console.log('search results ', searchResults)
	return (
		<div className ='search-results'>
		{searchResults.users && searchResults.users.map(user => {
			let profpic = user.profilephotos[0].filepath
			return (
				<div className='user-result'>
					<Link className='user-result' to={`/loggedIn/profile/${user.id}`}>
					<img className='pic-search-result' src={profpic}/>
					<div className="search-name">
						<h3>{user.first_name} {user.last_name}</h3>
						<h5>{user.current_city}</h5>
					</div>
					</Link>
				</div>)
		})}
		
		</div>
			)	
	}


const mapStateToProps = (state, ownProps) => {
	return {
		currentUser: state.currentUser,
		searchResults: state.search
	}
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Search)


// {searchResults.users && searchResults.locations.map(location => {
// 			return (
// 				<div className='location-result'>
// 					<Link className='user-result' to={`/loggedIn/location/${location.id}`}>
// 					<div className="search-name">
// 						<h3>{location.city}</h3>
// 					</div>
// 					</Link>
// 				</div>)
// 		})}
