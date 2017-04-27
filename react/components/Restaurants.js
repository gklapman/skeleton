import React from 'react';

const Restaurants = (props) => {
	var restaurants;
		if (props.locationInfo){
		 restaurants = props.locationInfo.restaurants
		}
			

	return (
	<div className="restaurants">
		<h3 className="text-center">Restaurants</h3>
		{restaurants && restaurants.map(restaurant => {
			return (
			<div className="restaurant text-center" key={restaurant.id}>
				<h4>{restaurant.name}</h4>
				<h5>{restaurant.stars}</h5>
				<p>{`"${restaurant.comments}"`}</p>
			</div>
			)
			}
		)}
	</div>
	)	
}

export default Restaurants;