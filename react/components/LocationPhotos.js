import React from 'react';
import {postImgThunkCreator, getLocationInfoThunkCreator} from '../redux/location'
import {browserHistory} from 'react-router'

const LocationPhotos = ({locationInfo, userInfo, currentUser}) => {

const handlePhotoSubmit = (evt) => {
	Promise.resolve(postImgThunkCreator(evt.target.files[0], 2))
	.then(res => {
	   console.log('this is the res', res)
	 	})

}

const reload= () => {
	window.location.reload()
}

const isUser = () => {
	if (currentUser && userInfo){
	return(currentUser.id === userInfo.id)
	} else {
		return false
	}
}
let photosArr = []
let a = 0;
let b = 1;
let c = 2;
let d = 3;
let e = 4;

if (locationInfo){
	locationInfo.locationphotos.forEach(locationphoto => {
		photosArr.push(locationphoto.filepath)
	})
}


	return (
	<div className="location-photos">
		<button></button>
		<div className='photo-flex'>
			<img className='photo-item' src={photosArr[a]}/>
		 	<img className='photo-item' src={photosArr[b]}/>
		 	<img className='photo-item' src={photosArr[c]}/>
		 	<img className='photo-item' src={photosArr[d]}/>
		 	<img className='photo-item' src={photosArr[e]}/>
		 </div>
		 <button>></button>
		{isUser() ? 
		<div>
		<label>Upload Photos</label>
		<input type="file" name="imgS3" accept="image/*" onChange={handlePhotoSubmit}/>
		<button onClick={reload}>Upload</button>
		</div> : null}
	</div>
)
}

export default LocationPhotos;