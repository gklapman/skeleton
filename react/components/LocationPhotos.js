import React from 'react';
import {postImgThunkCreator, getLocationInfoThunkCreator} from '../redux/location'
import {browserHistory} from 'react-router'


class LocationPhotos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// photosArr: ["https://travelapp1234.s3.amazonaws.com/14934107759741014390_10203208795764414_1452343653_n.jpg", "https://travelapp1234.s3.amazonaws.com/14934107759741014390_10203208795764414_1452343653_n.jpg",],
			a: 0, 
			b: 1, 
			c: 2, 
			d: 3,
			e: 4,
			showUpload: false
		}
		
	this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this)
	this.isUser = this.isUser.bind(this)
	this.next = this.next.bind(this)
	this.prev = this.prev.bind(this)
	this.changeUpload = this.changeUpload.bind(this)
	this.reload = this.reload.bind(this)
	}

handlePhotoSubmit(evt) {
	let locationId = this.props.locationInfo.id
	Promise.resolve(postImgThunkCreator(evt.target.files[0], locationId))
	.then(res => {
	   console.log('this is the res', res)
	 	})

}

reload() {

	window.location.reload()
}

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

changeUpload(){
	this.setState({
		showUpload: !this.state.showUpload
	})
}

	render(){
		console.log('this is the props', this.props.locationInfo)
		let photos = [];
		if (this.props.locationInfo){
			let photosArr = []
			let currentphotos = this.props.locationInfo.locationphotos
			for (let i = currentphotos.length-1; i >= 0; i--){
				photosArr.push(currentphotos[i].filepath)
				}
			
			
			photos = <div className="photos-container">
				{this.state.a !== 0 ? <button onClick={this.prev}className="prev-btn" >&#10094;</button> : null}
				<img className="photo-item" src={photosArr[this.state.a]}/>
			  	<img className="photo-item" src={photosArr[this.state.b]}/>
			  	<img className="photo-item" src={photosArr[this.state.c]}/>
			  	<img className="photo-item" src={photosArr[this.state.d]}/>
			  	<img className="photo-item" src={photosArr[this.state.e]}/>
			  	{this.state.e < photosArr.length ? <button onClick={this.next} className="next-btn">&#10095;</button> : null}
		  	</div>
		}
	


	return (


		<div className="location-photos">
			{photos}
		  	{this.isUser ? <button className="btn btn-default upload-photos" onClick={this.changeUpload}>Upload Photos</button> : null}
			{this.state.showUpload ? 
			<div>
				<input type="file" name="imgS3" accept="image/*" onChange={this.handlePhotoSubmit}/>
				<button onClick={this.reload}className="btn btn-default">Upload</button>
			</div> : null}
		</div>
		
	)
	}

}

export default LocationPhotos;


