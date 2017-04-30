 
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Pin} from './Pins'
import UserInfo from './UserInfo'


const ProfileMap = ({locations, handleClick, travelpageInfo, addbuddy}) => {
  
    
    return (
       <GoogleMapReact
        defaultCenter={{lat: 32.91, lng: -39.81}}
        defaultZoom={1}
      >
      <UserInfo className="userinfo" travelpageInfo = {travelpageInfo} addbuddy={addbuddy}/>
      <span className="yellow-star" lat={41.95} lng={-87.8}>★</span>
      {locations && locations.map(location => {
        return (<Pin 
          key={location.id}
          lat={location.lat} 
          lng={location.lng} 
          value={location.id}
          handleClick = {handleClick}
        />)
      })}
        
      </GoogleMapReact>
    );
  }


export default ProfileMap
