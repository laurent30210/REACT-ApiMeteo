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
const Map = ({ userPosition, results }) => {
  console.log('MAP : en réception de app ', results);
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
            Votre localisation
          </Popup>
        </Marker>
        {results.map((coordGPS) => (
          <Marker position={[coordGPS.coord.latitude, coordGPS.coord.lon]}>
            <Popup>
              {coordGPS.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
// PropTypes
Map.proptypes = {
  userPosition: PropTypes.object.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};
// == Export
export default Map;
