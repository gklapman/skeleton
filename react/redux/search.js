import axios from 'axios';
import React from 'react';
import {browserHistory} from 'react-router'
import store from '../store'


/* -----------------    ACTIONS     ------------------ */

const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';



/* ------------   ACTION CREATORS     ------------------ */

const setSearchResults = searchResults => ({ type: SET_SEARCH_RESULTS, searchResults });



/* ------------       REDUCER     ------------------ */

export default function reducer (searchResults = {}, action) {
  switch (action.type) {

    case SET_SEARCH_RESULTS:
      return action.searchResults;


    default:
      return searchResults;
  }
}



/* ------------       DISPATCHERS     ------------------ */

export const getSearchResultsThunkCreator = function (searcheditem){
	return (dispatch, getState) => {
	return axios.get(`/api/travelpage/search/?search=${searcheditem}`)
	.then(res => {
		dispatch(setSearchResults(res.data))
	})
	.catch(err => console.error(err))
		
	}
}


