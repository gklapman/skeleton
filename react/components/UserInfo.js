import React from 'react';

const UserInfo = ({travelpageInfo, addbuddy}) => {
	const name = travelpageInfo.first_name
	const currentCity = travelpageInfo.current_city;
	console.log('info',travelpageInfo)
	const buddyId = travelpageInfo.id
	let profilePic;
		if (travelpageInfo.profilepic){
			let picUrl = travelpageInfo.profilepic.filepath;
			profilePic = <div className="profile-container"><a href={`${picUrl}`}><img className="profilepic" src={picUrl}/></a></div>
		}

	return (
	<div className="user-info">
		{profilePic}
		<div className="user-details">
			<h5 className="name-prof">{`${name}'s TrvlPage`}</h5>
			<h6 className="city-prof">{`Current City: ${currentCity}`}</h6>
			<button onClick={addbuddy} value={buddyId} className='btn btn-default addbuddy-btn'>Add <br/> Trvlbuddy</button>
		</div>
	</div>
)
}
export default UserInfo;