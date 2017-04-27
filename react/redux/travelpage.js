import axios from 'axios';
import React from 'react';
import {browserHistory} from 'react-router'
import store from '../store'


/* -----------------    ACTIONS     ------------------ */

const INITIALIZE_PROFILE_INFO = 'INITIALIZE_PROFILE_INFO';



/* ------------   ACTION CREATORS     ------------------ */

const setProfile = userInfo => ({ type: INITIALIZE_PROFILE_INFO, userInfo });



/* ------------       REDUCER     ------------------ */

export default function reducer (travelpageInfo = {}, action) {
  switch (action.type) {

    case INITIALIZE_PROFILE_INFO: 
      return action.userInfo;


    default:
      return travelpageInfo;
  }
}



/* ------------       DISPATCHERS     ------------------ */

export const getTravelpageInfoThunkCreator = function (userId){
	return (dispatch, getState) => {
	return axios.get(`/api/travelpage/${userId}`)
	.then(res => {
		return res.data
	})
	.then(userObj => {
		dispatch(setProfile(userObj))
		console.log(store.getState())
	})

	.catch(err => console.error(err))
		
	}
}



