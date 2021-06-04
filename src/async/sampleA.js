const fetchData = require("../utils/FetchData");
const API = "https://rickandmortyapi.com/api/character/";

const getApiData = async (apiUrl) => {
  try {
    const data = await fetchData(apiUrl);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(`Count: ${data.info.count} ✔`);
    console.log(`Name: ${character.name} ✔`);
    console.log(`${origin.dimension} ✔`);
  } catch (err) {
    console.error(err);
  }
};

console.log("==> Before");
getApiData(API);
console.log("After <==");
