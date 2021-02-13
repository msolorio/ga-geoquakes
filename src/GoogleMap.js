import React from 'react';
import { GOOGLE_MAPS_API_KEY } from './.env';
import {
  Map,
  GoogleApiWrapper,
  Marker
} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class GoogleMap extends React.Component {
  renderMarkers() {
    return this.props.quakes.map((quake) => {
      console.log({ quake });

      return (
        <Marker
          key={quake.id}
          name={quake.properties.place}
          position={{lat: quake.geometry.coordinates[1], lng: quake.geometry.coordinates[0]}}
        />
      )
    });
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={1.79}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      >
        {this.renderMarkers()}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY
})(GoogleMap);
