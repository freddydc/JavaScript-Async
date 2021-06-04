const fetchData = require("../utils/FetchData");
const API = "https://rickandmortyapi.com/api/character/";

// ==> First request.
fetchData(API)
  .then((data) => {
    console.log(`Count: ${data.info.count} ✔`);
    return fetchData(`${API}${data.results[0].id}`); // ==> Second request.
  })
  .then((dataTwo) => {
    console.log(`Name: ${dataTwo.name} ✔`);
    return fetchData(dataTwo.origin.url); // ==> Third request.
  })
  .then((dataThree) => {
    console.log(`${dataThree.dimension} ✔`);
  })
  .catch((err) => console.error(err));
