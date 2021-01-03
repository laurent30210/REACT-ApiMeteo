/* eslint-disable linebreak-style */

// == Import npm
import React from 'react';

// == Import
import PropTypes from 'prop-types';
import './header.scss';
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

// == Composant
const Header = ({
  value,
  setValue,
  loadCityFromApi,
}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    loadCityFromApi(value);
    setValue('');
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Accueil</Navbar.Brand>
      <Form
        inline
        className="ml-5"
        onSubmit={onSubmit}
      >
        <FormControl
          type="text"
          placeholder="Indique votre ville"
          className="mr-sm-2"
          value={value}
          onChange={(event) => {
            const newValue = event.target.value;
            setValue(newValue);
          }}
        />
        <Button variant="outline-light" onClick={onSubmit}>Recherche</Button>
      </Form>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Inscription</Nav.Link>
        <Nav.Link href="#features">Connexion</Nav.Link>
      </Nav>
    </Navbar>
  );
};
// PropTypes
Header.propTypes = {
  // boolén indiquant si l'on est connecté
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  loadCityFromApi: PropTypes.func.isRequired,
};
// == Export
export default Header;
