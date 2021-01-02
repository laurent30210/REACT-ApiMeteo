/* eslint-disable linebreak-style */
// == Import npm
import React, { useState, useEffect } from 'react';

// == Import component
import Header from 'src/components/Header';
import Map from 'src/components/Map';
// == Import
import './app.scss';

// == Composant
const App = () => {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [userPosition, setUserPosition] = useState([45, 2]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if ('geolocation' in navigator) {
        console.log(position);
        const { latitude, longitude } = position.coords;
        setUserPosition([latitude, longitude]);
      }
    });
    console.log('lancement du useEffect');
  }, []);

  return (
    <div className="app">
      <Header
        value={value}
        setValue={setValue}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <main className="main">
        <section className="main__container">
          <section className="main__left">
            <p>Votre recherche se porte sur : {inputValue}</p>

          </section>
          <section className="main__right">
            {console.log('Je suis dans app ', userPosition)}
            { userPosition
              !== null
              ? <Map userPosition={userPosition} />
              : <Map userPosition={[45, 5]} />}
          </section>
        </section>
      </main>
    </div>
  );
};

// == Export
export default App;
