/* eslint-disable linebreak-style */
// == Import npm
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// == Import component
import Header from 'src/components/Header';
import Map from 'src/components/Map';
import City from 'src/components/City';
// == Import
import './app.scss';

// == Composant
const App = () => {
  const [value, setValue] = useState('');
  const [userPosition, setUserPosition] = useState([45, 2]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if ('geolocation' in navigator) {
        const { latitude, longitude } = position.coords;
        setUserPosition([latitude, longitude]);
      }
    });
    console.log('lancement du useEffect');
  }, []);

  const loadCityFromApi = (city) => {
    const KEY = 'ffe5f1ec3fc89d7f62bb1b80bb651349';
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&lang=fr&units=metric`)
      .then((response) => {
        console.log(response.data);
        const result = {
          id: response.data.id,
          coord: {
            latitude: response.data.coord.lat,
            lon: response.data.coord.lon,
          },
          name: response.data.name,
          temp: response.data.main.temp,
          weather: response.data.weather[0].description,
        };
        setResults([...results, result]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <Header
        value={value}
        setValue={setValue}
        loadCityFromApi={loadCityFromApi}
      />
      <main className="main">
        <section className="main__container">
          <section className="main__left">
            <p>Résultat de vos recherches :</p>
            {results.map((result) => (
              <City city={result} />
            ))}
          </section>
          <section className="main__right">
            <Map userPosition={userPosition} />
          </section>
        </section>
      </main>
    </div>
  );
};

// == Export
export default App;
