import React from 'react';

const Accomadations = (props) => {
	var accomadations;
		if (props.locationInfo){
		 accomadations = props.locationInfo.accomadations
		}
			

	return (
	<div className="accomadations">
		<h3 className="text-center">Accomadations</h3>
		{accomadations && accomadations.map(accomadation => {
			return (
			<div className="accomadation text-center" key={accomadation.id}>
				<h4>{accomadation.name}</h4>
				<h5>{accomadation.stars}</h5>
				<p>{`"${accomadation.comments}"`}</p>
			</div>
			)
			}
		)}
	</div>
	)	
}

export default Accomadations;