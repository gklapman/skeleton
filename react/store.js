import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';


import rootReducer from './redux';

export default createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
		)
	)
