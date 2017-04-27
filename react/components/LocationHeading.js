import React from 'react';

const LocationHeading = (props) => {
	let city, overallReview;
	let startingDate = "";
	let endingDate = "";

	if (props.locationInfo){
	 city = props.locationInfo.city
	 overallReview = props.locationInfo.overall_review;
	 if (props.locationInfo.starting_date !== null){
	 startingDate = props.locationInfo.starting_date
	 } if (props.locationInfo.ending_date !== null){
	 endingDate = props.locationInfo.ending_date
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