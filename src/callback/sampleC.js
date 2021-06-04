let XHRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(apiUrl, callBack) {
  let xmlHR = new XHRequest();
  // Open connection and enable asynchronous = (true).
  xmlHR.open("GET", apiUrl, true);
  // ==> (event) optional.
  xmlHR.onreadystatechange = function (event) {
    if (xmlHR.readyState === 4) {
      // Server status 200 OK!.
      if (xmlHR.status === 200) {
        callBack(null, JSON.parse(xmlHR.responseText)); // ==> Convert API to JSON.
      } else {
        const error = new Error("🔥 Fail request 🔥", apiUrl);
        return callBack(error, null); // callBack('First Error', 'Second Data').
      }
    }
  };
  xmlHR.send(); // ==> Send API request.
}

// fetchData('API URL', ('Call Back Error', 'Call Back Data') => {}).
// ==> First request
fetchData(API, function (err, data) {
  if (err) return console.error(err);
  // ==> Second request.
  fetchData(API + data.results[0].id, function (errTwo, dataTwo) {
    if (errTwo) return console.error(errTwo);
    // ==> Third request.
    fetchData(dataTwo.origin.url, function (errThree, dataThree) {
      if (errThree) return console.error(errThree);

      console.log(`Count: ${data.info.count} ✔`);
      console.log(`Name: ${dataTwo.name} ✔`);
      console.log(`${dataThree.dimension} ✔`);
    });
  });
});
