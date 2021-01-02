/* eslint-disable linebreak-style */

// == Import npm
import React from 'react';

// == Import
import './map.scss';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import PropTypes from 'prop-types';

// == Composant
const Map = ({ userPosition }) => {
  console.log('en réception de app', userPosition);
  return (
    <div id="mapid">
      <MapContainer
        className="leafletContainer"
        center={[45.505, 1.09]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={userPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
// PropTypes
Map.proptypes = {
  userPosition: PropTypes.object.isRequired,
  lattitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};
// == Export
export default Map;
