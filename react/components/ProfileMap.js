 
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Pin} from './Pins'
import UserInfo from './UserInfo'


const ProfileMap = ({locations, handleClick, travelpageInfo, addbuddy, currentUser}) => {
  
    console.log('this is the travelpageInfo', travelpageInfo)
    let lat = Number(travelpageInfo.lat)
    let lng = Number(travelpageInfo.lng)
    return (
       <GoogleMapReact
        defaultCenter={{lat: 32.91, lng: -39.81}}
        defaultZoom={1}
      >
      <UserInfo className="userinfo" 
      travelpageInfo = {travelpageInfo} 
      addbuddy={addbuddy} 
      currentUser={currentUser}
      />
      {locations && 
      <span className="yellow-star" lat={lat} lng={lng}>★</span>}
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
