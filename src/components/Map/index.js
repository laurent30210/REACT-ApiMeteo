/* eslint-disable linebreak-style */

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './map.scss';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

// == Composant
const Map = ({ userPosition, results, resultsCenters }) => {
  console.log('MAP : en réception de app ', userPosition);
  return (
    <div id="mapid">
      <MapContainer
        className="leafletContainer"
        center={userPosition}
        zoom={5}
        scrollWheelZoom
        animate
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={userPosition}>
          <Popup>
            Votre localisation
          </Popup>
        </Marker>
        <MarkerClusterGroup
          spiderfyDistanceMultiplier={1}
          showCoverageOnHover={false}
        >
          {resultsCenters && resultsCenters.map((coordGPSCenter) => (
            <Marker position={
              [coordGPSCenter.coordinates[1],
                coordGPSCenter.coordinates[0]]
            }
            >
              <Popup>
                {coordGPSCenter.institution_name}
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
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
Map.propTypes = {
  userPosition: PropTypes.object.isRequired,
};
// == Export
export default Map;
