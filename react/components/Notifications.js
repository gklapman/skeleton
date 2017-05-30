import React from 'react';
import {Link} from 'react-router'

const Notifications = ({notifications, acceptBuddyRequest}) => {


	return (
	<div className="notifications" id="notis">
		{notifications.map(noti => {
			if (noti.type === "buddy request"){
				return (<div className='buddy-noti' key={noti.id}>
					<Link to={`/loggedIn/profile/${noti.userId}`}>
					<div className="noti-name">{noti.user_first} {noti.user_last}</div> 
					</Link>
					added you as a trvlbuddy 
					<button className="btn accept-btn btn-success" value={noti.userId} onClick={acceptBuddyRequest}>Accept</button>
					</div>)
			} else {
				return (<div className='photo-noti' key={noti.id}>
					<Link to={`/loggedIn/profile/${noti.userId}`}>
					<div className="noti-name">{noti.user_first} {noti.user_last}</div> 
					</Link>
					commented on your trvl photo</div>)
			}
		})}
		
		</div>
			)	
	}


export default Notifications;