import React, {Component} from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './../index.css'
import API_KEY from "../API_KEY";

const mapStyles = {
    width: '50%',
    height: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  export class MapContainer extends Component {
    render() {
      return (
        <Map 
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
        />
      );
    }
  }
  
export default GoogleApiWrapper({
    apiKey: API_KEY,
    language: "EN"
  })(MapContainer);
