import React from 'react';
import {browserHistory} from 'react-router'
import {postProfThunkCreator} from '../redux/travelpage'



const ProfPic = ({handlePhotoSubmit, next}) => {

	return (
			<div className="profile-pic">
				<h2 className="upload-prof">Upload Profile Picture</h2>
				<div className="prof-upload">
					<input className="prof-pic" type="file" name="imgS3" accept="image/*" onChange={handlePhotoSubmit}/>
					<button className="btn btn-default" onClick={next}>Upload</button>
					<button className="btn btn-default" onClick={next} >Skip For Now</button>
				</div>
			</div>
			)	

}




export default ProfPic 