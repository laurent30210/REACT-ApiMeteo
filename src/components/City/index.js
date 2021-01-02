/* eslint-disable linebreak-style */

// == Import npm
import React from 'react';

// == Import
import './city.scss';

import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

// == Composant
const City = ({ city }) => (
  <div className="city">
    <Card>
      <Card.Body>
        <Card.Title>{city.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Acutellement : {city.weather}</Card.Subtitle>
        <Card.Text>
          La température est de {city.temp}°
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

// PropTypes
City.propTypes = {
  city: PropTypes.arrayOf(
    PropTypes.shape({ // on ne met dans la shape, que ce dont on va effectivement se servir
      id: PropTypes.number.isRequired,
      coord: PropTypes.object.isRequired,
      name: PropTypes.string,
      temp: PropTypes.number.isRequired,
      weather: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
// == Export
export default City;
