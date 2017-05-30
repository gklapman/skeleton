import React from 'react';

const LocationHeading = (props) => {
	let city, overallReview;
	let startingDate = "";
	let endingDate = "";

	if (props.locationInfo){
	 city = props.locationInfo.city
	 overallReview = props.locationInfo.overall_review;
	 if (props.locationInfo.starting_date !== null){
	 startingDate = new Date (props.locationInfo.starting_date).toDateString().slice(4)
	 } if (props.locationInfo.ending_date !== null){
	 endingDate = new Date (props.locationInfo.ending_date).toDateString().slice(4)
	 }
	} 

	return (
	<div className="location-heading">
		<h1 className="location-name text-center">{`${city}`}</h1>
		<h4 className="location-dates text-center">{`${startingDate}-${endingDate}`}</h4>
		<p className="overall-review text-center">{`"${overallReview}"`}</p>
	</div>
	)
}

export default LocationHeading;