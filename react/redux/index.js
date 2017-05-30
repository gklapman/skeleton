import { combineReducers } from 'redux';
import currentUser from './currentUser'
import travelpageInfo from './travelpage'
import locationInfo from './location'
import {reducer as formReducer} from 'redux-form'
import notifications from './notifications'
import search from './search'


export default combineReducers({currentUser, travelpageInfo, locationInfo, form: formReducer, notifications, search});