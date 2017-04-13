import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './redux';

export default createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware)
)