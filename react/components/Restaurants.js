import React from 'react';

const Restaurants = (props) => {
		var restaurants;
		if (props.locationInfo){
		 restaurants = props.locationInfo.restaurants
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
	<div className="restaurants">
		<h3 className="text-center">Restaurants</h3>
		{restaurants && restaurants.map(restaurant => {
			return (
			<div className="restaurant text-center" key={restaurant.id}>	
			<div className="left">
				<h4>{restaurant.name}</h4>
				{numStars(restaurant.stars)}
			</div>
			<div className="right"> 
				<p className="comments">{`"${restaurant.comments}"`}</p>
			</div>	
			</div>
			)
			}
		)}
	</div>
	)	
}

export default Restaurants;