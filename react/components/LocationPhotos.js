import React from 'react';
import {postImgThunkCreator} from '../redux/location'

const LocationPhotos = (props) => {

const handlePhotoSubmit = (evt) => {
	Promise.resolve(postImgThunkCreator(evt.target.files[0], 2))
	.then(res => {
	   console.log('this is the url ', res)
	})

}

	return (
	<div className="location-photos">
		<p>inside of LocationPhotos</p>
		<div>
		<label>Upload Photos</label>
		<input type="file" name="imgS3" accept="image/*" onChange={handlePhotoSubmit}/>
		</div>
	</div>
)
}

export default LocationPhotos;