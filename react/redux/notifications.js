import axios from 'axios';
import React from 'react';
import {browserHistory} from 'react-router'
import store from '../store'


/* -----------------    ACTIONS     ------------------ */

const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';



/* ------------   ACTION CREATORS     ------------------ */

const setNotifications = notifications => ({ type: SET_NOTIFICATIONS, notifications });



/* ------------       REDUCER     ------------------ */

export default function reducer (notifications = [], action) {
  switch (action.type) {

    case SET_NOTIFICATIONS: 
      return action.notifications;


    default:
      return notifications;
  }
}



/* ------------       DISPATCHERS     ------------------ */

export const getNotificationsThunkCreator = function (){
	console.log('invoking noti thunk')
	return (dispatch, getState) => {
	return axios.get(`/api/me/notifications`)
	.then(res => {
		dispatch(setNotifications(res.data))
	})
	.catch(err => console.error(err))
		
	}
}


