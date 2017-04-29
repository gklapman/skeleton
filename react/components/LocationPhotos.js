import React from 'react';
import {postImgThunkCreator, getLocationInfoThunkCreator} from '../redux/location'
import {browserHistory} from 'react-router'

class LocationPhotos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photosArr: ["https://travelapp1234.s3.amazonaws.com/149341007454210170838_10152387401152953_2367783362630725337_n.jpg", "https://travelapp1234.s3.amazonaws.com/14934102283541978631_10203594704491891_7442123829563152777_n.jpg", "https://travelapp1234.s3.amazonaws.com/149341007454210170838_10152387401152953_2367783362630725337_n.jpg", "https://travelapp1234.s3.amazonaws.com/14934102283541978631_10203594704491891_7442123829563152777_n.jpg", "https://travelapp1234.s3.amazonaws.com/149341007454210170838_10152387401152953_2367783362630725337_n.jpg", "https://travelapp1234.s3.amazonaws.com/14934102283541978631_10203594704491891_7442123829563152777_n.jpg", "https://travelapp1234.s3.amazonaws.com/149341007454210170838_10152387401152953_2367783362630725337_n.jpg", "https://travelapp1234.s3.amazonaws.com/14934102283541978631_10203594704491891_7442123829563152777_n.jpg"],
			a: 0, 
			b: 1, 
			c: 2, 
			d: 3,
			e: 4,
		}
		
	this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this)
	this.isUser = this.isUser.bind(this)
	this.next = this.next.bind(this)
	this.prev = this.prev.bind(this)
	}

handlePhotoSubmit(evt) {
	Promise.resolve(postImgThunkCreator(evt.target.files[0], 2))
	.then(res => {
	   console.log('this is the res', res)
	 	})

}

// reload() {
// 	window.location.reload()
// }

isUser() {
	if (this.props.currentUser && this.props.userInfo){
	return(this.props.currentUser.id === this.props.userInfo.id)
	} else {
		return false
	}
}





 prev(){
 	this.setState({
	 	a: this.state.a-1,
		b: this.state.b-1,
		c: this.state.c-1,
		d: this.state.d-1,
		e: this.state.e-1
 	})
}


 next(){
	console.log('clicking next')
	this.setState({
		a: this.state.a+1,
		b: this.state.b+1,
		c: this.state.c+1,
		d: this.state.d+1,
		e: this.state.e+1	
	})
	
}

	render(){
		console.log('this is the props', this.props)

	// 	if (this.props.locationInfo){
	// 		let photosHolder = []
	// 		this.props.locationInfo.locationphotos.forEach(locationphoto => {
	// 		photosHolder.push(locationphoto.filepath)
	// 	})
	// 		this.setState({
	// 			photosArr: photosHolder
	// 		})
	// 	console.log('photo length')
	// }

	return (


	<div className="location-photos">
		 <div className="photos-container">
			{this.state.a !== 0 ? <button onClick={this.prev}className="prev-btn" >&#10094;</button> : null}
			<img className="photo-item" src={this.state.photosArr[this.state.a]}/>
		  	<img className="photo-item" src={this.state.photosArr[this.state.b]}/>
		  	<img className="photo-item" src={this.state.photosArr[this.state.c]}/>
		  	<img className="photo-item" src={this.state.photosArr[this.state.d]}/>
		  	<img className="photo-item" src={this.state.photosArr[this.state.e]}/>
		  	{this.state.e !== this.state.photosArr.length -1 ? <button onClick={this.next} className="next-btn">&#10095;</button> : null}
	  	</div>
		{this.isUser() ? 
		<div>
		<label>Upload Photos</label>
		<input type="file" name="imgS3" accept="image/*" onChange={handlePhotoSubmit}/>
		<button>Upload</button>
		</div> : null}
	</div>
	)
	}
}

export default LocationPhotos;


