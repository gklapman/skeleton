import React from 'react';

const UserInfo = (props) => {
	const name = props.travelpageInfo.first_name
	const currentCity = props.travelpageInfo.current_city;

	return (
	<div className="user-info">
		<h2>{`${name}'s TravelPage`}</h2>
		<h3>{`Current City: ${currentCity}`}</h3>
	</div>
)
}
export default UserInfo;