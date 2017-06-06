import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './containers/Main'

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>

		</Route>
	</Router>
);

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
