import axios from 'axios';
import React from 'react';
import {browserHistory} from 'react-router'
import store from '../store'


/* -----------------    ACTIONS     ------------------ */

const EXAMPLE = 'EXAMPLE';



/* ------------   ACTION CREATORS     ------------------ */

const exampleAction = exampleInfo => ({ type: EXAMPLE, exampleInfo });



/* ------------       REDUCER     ------------------ */

export default function reducer (exampleObj = {}, action) {
  switch (action.type) {

    case EXAMPLE: 
      return action.exampleInfo;


    default:
      return exampleObj;
  }
}



/* ------------       DISPATCHERS     ------------------ */

export const exampleDispatcher = function (exampleInfo){
	return (dispatch, getState) => {
	return axios.get(`/api/example/`)
	.then(res => {
		return res.data
	})
	.then(exampleInfo => {
		dispatch(exampleAction(exampleInfo))
	})

	.catch(err => console.error(err))
		
	}
}



