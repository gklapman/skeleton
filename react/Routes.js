import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './containers/Main'
import WelcomeContainer from './containers/WelcomeContainer'
import LoggedInContainer from './containers/LoggedInContainer'
import TravelfeedContainer from './containers/TravelfeedContainer'
import ProfileContainer from './containers/ProfileContainer'
import LocationContainer from './containers/LocationContainer'

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={WelcomeContainer} />
			<Route path="loggedIn/" component={LoggedInContainer}>
				<Route path="travelfeed" component={TravelfeedContainer} />
				<Route path="profile/:userId" component={ProfileContainer} />
				<Route path="location/:locationId" component={LocationContainer} />
			</Route>
		</Route>
	</Router>
);

export default Routes;