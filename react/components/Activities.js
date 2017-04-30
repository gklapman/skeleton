import React from 'react';

const Activities = (props) => {
	var activities;
		if (props.locationInfo){
		 activities = props.locationInfo.activities
		}
	
const numStars = (givenstars) => {

	 let stars = []
	for (let i = 1; i <= givenstars; i++){
		stars.push(<span className="yellow-stars">★</span>)
	}
	for (let j = 1; j <= 5-givenstars; j++){
		stars.push(<span className="grey-stars">★</span>)
	}
	return stars
}

	return (
	<div className="activities">
		<h3 className="text-center">Activities</h3>
		{activities && activities.map(activity => {
			return (
			<div className="activity text-center" key={activity.id}>	
			<div className="left">
				<h4>{activity.name}</h4>
				{numStars(activity.stars)}
			</div>
			<div className="right"> 
				<p className="comments">{`"${activity.comments}"`}</p>
			</div>	
			</div>
			)
			}
		)}
	</div>
	)	
}

export default Activities;