import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './containers/Main'
import WelcomeContainer from './containers/WelcomeContainer'
import LoggedInContainer from './containers/LoggedInContainer'
import TravelfeedContainer from './containers/TravelfeedContainer'
import ProfileContainer from './containers/ProfileContainer'
import LocationContainer from './containers/LocationContainer'

import {getTravelpageInfoThunkCreator} from './redux/travelpage'
import {getCurrentUserInfoThunkCreator} from './redux/currentUser'
import {getLocationInfoThunkCreator} from './redux/location'
import {ProfileMap} from './components/ProfileMap'
import {getNotificationsThunkCreator} from './redux/notifications'

const Routes = ({fetchProfileInfo, fetchCurrentUserInfo, fetchLocationInfo, fetchNotifications}) => (
	<Router history={browserHistory}>
		<Route path="/" component={Main} onEnter={fetchCurrentUserInfo}>
			<Route path="welcome" component={WelcomeContainer} />
			<Route path="loggedIn/" component={LoggedInContainer} onEnter={fetchNotifications}>
				<Route path="travelfeed" component={TravelfeedContainer} />
				<Route path="profile/:userId" component={ProfileContainer} onEnter={fetchProfileInfo} />
				<Route path="location/:locationId" component={LocationContainer} onEnter={fetchLocationInfo}/>
			</Route>
		</Route>
	</Router>
);

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
	fetchProfileInfo: (nextRouterState) => {
		
		const userId = nextRouterState.params.userId
		dispatch(getTravelpageInfoThunkCreator(userId))
	},
	fetchCurrentUserInfo: () => {
		dispatch(getCurrentUserInfoThunkCreator())
		let currentLocation = browserHistory.getCurrentLocation()
		if (currentLocation.pathname === "/" || currentLocation.pathname === '/loggedIn/'){
			browserHistory.replace('/loggedIn/travelfeed')
		}
	},
	fetchLocationInfo: (nextRouterState) => {
		console.log('inside of fetchLocationInfo')
		const locationId = nextRouterState.params.locationId
		dispatch(getLocationInfoThunkCreator(locationId))
	},
	fetchNotifications: () => {
		dispatch(getNotificationsThunkCreator())
	}

})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
