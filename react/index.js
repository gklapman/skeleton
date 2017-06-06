import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';
// import {ProfileMap} from './components/ProfileMap'
// import ProfileContainer from './containers/ProfileContainer'
// import SimpleMap from './components/ProfileMap'
// import {MapContainer} from './containers/MapContainer'
// import LocationContainer from './containers/LocationContainer'



ReactDOM.render(
	<Provider store={store}>	
  		<div>
   		 <Routes/>
  		</div>
  </Provider>,
  document.getElementById('app')
);
