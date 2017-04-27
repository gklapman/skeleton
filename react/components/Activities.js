import React from 'react';

const Activities = (props) => {
	var activities;
		if (props.locationInfo){
		 activities = props.locationInfo.activities
		}
			

	return (
	<div className="activities">
		<h3 className="text-center">Activities</h3>
		{activities && activities.map(activity => {
			return (
			<div className="activity text-center" key={activity.id}>
				<h4>{activity.name}</h4>
				<h5>{activity.stars}</h5>
				<p>{`"${activity.comments}"`}</p>
			</div>
			)
			}
		)}
	</div>
	)	
}

export default Activities;