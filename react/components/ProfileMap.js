 
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Pin} from './Pins'



const ProfileMap = ({locations, handleClick}) => {
  
    
    return (
       <GoogleMapReact
        defaultCenter={{lat: 32.91, lng: -39.81}}
        defaultZoom={1}
      >
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
