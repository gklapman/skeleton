

import GoogleMapReact from 'google-map-react';
import React, {Component} from 'react';



export const Pin = ({handleClick, value}) => {

    return (
       <button onClick={handleClick} value={value} className="pin">
       </button>
    );
  }

