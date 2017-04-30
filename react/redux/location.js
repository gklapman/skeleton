import axios from 'axios';
import React from 'react';
import {browserHistory} from 'react-router'
import store from '../store'
import {getCurrentUserThunkCreator} from './currentUser'

/* -----------------    ACTIONS     ------------------ */

const SET_LOCATION = 'SET_LOCATION';



/* ------------   ACTION CREATORS     ------------------ */

const setLocation = locationInfo => ({ type: SET_LOCATION, locationInfo });



/* ------------       REDUCER     ------------------ */

export default function reducer (locationInfo = {}, action) {
  switch (action.type) {

    case SET_LOCATION: 
      return action.locationInfo;


    default:
      return locationInfo;
  }
}



/* ------------       DISPATCHERS     ------------------ */

export const getLocationInfoThunkCreator = function (locationId){
	console.log('invoking with ', locationId)
	return (dispatch, getState) => {
	return axios.get(`/api/location/${locationId}`)
	.then(res => {
		return res.data
	})
	.then(locationObj => {
		let photosArr = []
		if (locationObj.location){
			let currentphotos = locationObj.location.locationphotos
			for (let i = currentphotos.length-1; i >= 0; i--){
				photosArr.push(currentphotos[i].filepath)
			}
		}
		locationObj.photosArr = photosArr
		dispatch(setLocation(locationObj))
		

		
	})

	.catch(err => console.error(err))
		
	}
}

export const postImgThunkCreator = function(file, locationId){
	return axios.get(`/api/location/sign?filename=${file.name}&filetype=${file.type}`)
	.then(res => {
		console.log('this is the res', res)
		const signedUrl = res.data.signedRequest
		const options = {
			headers: {
				'Content-Type': file.type
			}
		}
		  axios.put(signedUrl, file, options)
		  return axios.post('/api/location/addPhoto', {locationId, Url: res.data.url})
		
	})
	.then(locationPhoto => {
		return locationPhoto
	})

	
	.catch(err => console.log(err))
	}	




