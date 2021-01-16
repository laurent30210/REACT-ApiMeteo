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
import cities2 from 'src/data/cities2';

// == Composant
const App = () => {
  const [value, setValue] = useState('');
  const [userPosition, setUserPosition] = useState([44, 5]);
  const [results, setResults] = useState([]);
  const [resultsCenters, setResultsCenters] = useState(cities2);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if ('geolocation' in navigator) {
        const { latitude, longitude } = position.coords;
        console.log(position);
        setUserPosition([latitude, longitude]);
      }
    });
    console.log('lancement du useEffect au démarrage');

    /**
     * SEND ADRESS'S CITIES AT GOUV'S API FOR GET COORDGPS AND STORE DATAS ON THE STATE
     * */

    // const result = [];
    // data.forEach((element, index) => {

    //   setTimeout(() => {
    //     axios.get(`https://api-adresse.data.gouv.fr/search/?q=${element.Adresse}&postcode=${element.CP}&city=${element.Ville}`)
    //       .then((response) => {
    //         // console.log(response.data.features[0].properties.name,
    //         //   response.data.features[0].properties.citycode,
    //         //   response.data.features[0].properties.city,
    //         //   response.data.features[0].geometry.coordinates);
    //         result.push({
    //           id: index,
    //           Institution_name: element.Raison_sociale,
    //           Adress_complement: element.Adresse_complement,
    //           Adress: response.data.features[0].properties.name,
    //           PO_Box_Localilty: element.Lieudit_BP,
    //           Postcode: response.data.features[0].properties.citycode,
    //           City: response.data.features[0].properties.city,
    //           Phone: element.Tel,
    //           Phone_fax: element.Fax,
    //           Opening_date: element.Date_ouvert,
    //           Category: element.Lib_categorie,
    //           Dialysis_C: element.Dialyse_C,
    //           Dialysis_UM: element.Dialyse_UM,
    //           Dialysis_ADA: element.Dialyse_ADA,
    //           Dialysis_ADS: element.Dialyse_ADS,
    //           coordinates: response.data.features[0].geometry.coordinates,
    //         });
    //         console.log(result, response.data.features[0].properties.city);
    //       });
    //   }, 1000 * index);
    // });
  }, []);

  const loadCityFromApi = (city) => {
    const KEY = 'ffe5f1ec3fc89d7f62bb1b80bb651349';
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&lang=fr&units=metric`)
      .then((response) => {
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
            <Map userPosition={userPosition} results={results} resultsCenters={resultsCenters} />
          </section>
        </section>
      </main>
    </div>
  );
};

// == Export
export default App;
