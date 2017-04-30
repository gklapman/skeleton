import { combineReducers } from 'redux';
import currentUser from './currentUser'
import travelpageInfo from './travelpage'
import locationInfo from './location'
import {reducer as formReducer} from 'redux-form'
import notifications from './notifications'


export default combineReducers({currentUser, travelpageInfo, locationInfo, form: formReducer, notifications});