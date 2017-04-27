import axios from 'axios';
import React from 'react';
import {browserHistory} from 'react-router'
import store from '../store'


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
	return (dispatch, getState) => {
	return axios.get(`/api/location/${locationId}`)
	.then(res => {
		return res.data
	})
	.then(locationObj => {
		dispatch(setLocation(locationObj))
		
	})

	.catch(err => console.error(err))
		
	}
}



