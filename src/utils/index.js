/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// import data
import data from 'src/data/cities';

export const getCoordsCentersWithApi = () => {
  const result = [];
  data.forEach((element, index) => {
    console.log(element);
    // setTimeout(() => {
    //   axios.get(`https://api-adresse.data.gouv.fr/search/?q=${centre.Adresse}&postcode=${centre.CP}&city=${centre.Ville}`)
    //     .then((response) => {
    //       // console.log(response.data.features[0].properties.name,
    //       //   response.data.features[0].properties.citycode,
    //       //   response.data.features[0].properties.city,
    //       //   response.data.features[0].geometry.coordinates);
    //       result.push({
    //         Raison_sociale: centre.Raison_sociale,
    //         Adresse_complement: centre.Adresse_complement,
    //         Adresse: response.data.features[0].properties.name,
    //         Lieudit_BP: centre.Lieudit_BP,
    //         CP: response.data.features[0].properties.citycode,
    //         Ville: response.data.features[0].properties.city,
    //         Tel: centre.Tel,
    //         Fax: centre.Fax,
    //         Date_ouvert: centre.Date_ouvert,
    //         Lib_categorie: centre.Lib_categorie,
    //         Dialyse_C: centre.Dialyse_C,
    //         Dialyse_UM: centre.Dialyse_UM,
    //         Dialyse_ADA: centre.Dialyse_ADA,
    //         Dialyse_ADS: centre.Dialyse_ADS,
    //         coordinates: response.data.features[0].geometry.coordinates,
    //       });
    //       console.log(result);
    //     });
    // }, 1000 * index);
  });
};
