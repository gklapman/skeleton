import React from 'react';

const Accomadations = (props) => {
	var accomadations;
		if (props.locationInfo){
		 accomadations = props.locationInfo.accomadations
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
	<div className="accomadations">
		<h3 className="text-center">Accomadations</h3>
		{accomadations && accomadations.map(accomadation => {
			return (
			<div className="accomadation text-center" key={accomadation.id}>	
			<div className="left">
				<h4>{accomadation.name}</h4>
				{numStars(accomadation.stars)}
			</div>
			<div className="right"> 
				<p className="comments">{`"${accomadation.comments}"`}</p>
			</div>	
			</div>
			)
			}
		)}
	</div>
	)	
}

export default Accomadations;