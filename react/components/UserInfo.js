import React from 'react';
import {browserHistory} from 'react-router'

const UserInfo = ({travelpageInfo, addbuddy, currentUser}) => {
	const name = travelpageInfo.first_name
	const currentCity = travelpageInfo.current_city;
	console.log('info',travelpageInfo)
	const buddyId = travelpageInfo.id
	let profilePic;
		if (travelpageInfo.profilepic){
			let picUrl = travelpageInfo.profilepic.filepath;
			profilePic = <div className="profile-container"><a href={`${picUrl}`}><img className="profilepic" src={picUrl}/></a></div>
		}
	let buddyBtn;
		if (currentUser.id !== travelpageInfo.id && travelpageInfo.friends){
			console.log('this is the friends', friends)
			let friends = (travelpageInfo.friends.some(friend => {
				return (friend.user1Id === currentUser.id || friend.user2Id === currentUser.id)
			}))
			if (!friends){
				
				buddyBtn = <button onClick={addbuddy} value={buddyId} className='btn btn-default addbuddy-btn'>Add <br/> Trvlbuddy</button>
			}
		} else {
			<div></div>
		}

	return (
	<div className="user-info">
		{profilePic}
		<div className="user-details">
			<h5 className="name-prof">{`${name}'s TrvlPage`}</h5>
			<h6 className="city-prof">{`Current City: ${currentCity}`}</h6>
			{buddyBtn}
		</div>
	</div>
)
}
export default UserInfo;