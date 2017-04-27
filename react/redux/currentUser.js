import axios from 'axios';
import React from 'react';
import {browserHistory} from 'react-router'



/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';



/* ------------   ACTION CREATORS     ------------------ */

const setUser = user => ({ type: SET_CURRENT_USER, user });



/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser= {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER: 
      return action.user;


    default:
      return currentUser;
  }
}



/* ------------       DISPATCHERS     ------------------ */

export const loginUserThunkCreator = function (email, password){
	return (dispatch, getState) => {
	return axios.post('/api/login', {email: email, password: password})
	.then(res => {
		return res.data
	})
	.then(userObj => {
		dispatch(setUser(userObj))
		const path = '/loggedIn/travelfeed'
		browserHistory.push(path)
	})

	.catch(err => console.error(err))
		
	}
}


export const createUserThunkCreator = function (createaccountInfo){
	console.log('inside of the thunk with this ', createaccountInfo)
	return (dispatch, getState) => {
		return axios.post('api/createaccount', {createaccountInfo})
		.then(res => {
			return res.data
		})
		.then(userObj => {
			if (typeof userObj == 'string'){
				return userObj
			}
			dispatch(setUser(userObj))
			const path = '/loggedIn/travelfeed' //will need to make this go to upload prof pic
			browserHistory.push(path)
		})
		.catch(err => console.error(err))
	}
}

export const getCurrentUserInfoThunkCreator = () => dispatch => {
	return axios.get('/api/me')
	.then(res => {
		return res.data
	})
	.then(userObj => {
		dispatch(setUser(userObj))
		if (!userObj.id){
		const path = '/welcome'
		browserHistory.replace(path)
		} 
	})
	.catch(err => console.error(err))
	}


export const logoutThunkCreator = () => dispatch => {
  return axios.post('/api/me/logout')
  .then(()=> {
  	dispatch(setUser({}))
  	browserHistory.replace('/welcome')
  })
  .catch(err => console.error(err))
}
