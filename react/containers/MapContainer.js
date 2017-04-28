import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import GoogleMapReact from 'google-map-react';
// import {ProfileMap} from '../components/ProfileMap'
import SimpleMap from '../components/ProfileMap'

export const MapContainer = function() {
	console.log('this is rendering')
  return(
  		<div className="location-item" style={{width: '100%', height: '400px'}}>
        	<SimpleMap/>
        </div>
    )
}