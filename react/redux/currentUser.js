import axios from 'axios';

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

export const LoginUserThunkCreator = function (email, password){
	return (dispatch, getState) => {
	//MAKE AN AXIOS REQUEST
	return axios.post('/api/login', {email: email, password: password})
	.then(res => {
		return res.data
	})
	.then(userObj => {
		dispatch(setUser(userObj))
	})
	.catch(err => console.error(err))
	//INVOKE SET USER ACTION
		
	}
}

