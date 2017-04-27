import React from 'react';

const UserMap = (props) => {
	const locations = props.locations
	

	return (
	<div className="user-map">
		{locations && locations.map(location => {
			return (
				<div key={location.id}>
					{location.city}
				</div>
				)
		})}
	</div>
)
}
export default UserMap;