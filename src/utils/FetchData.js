let XHRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (apiUrl) => {
  return new Promise((resolve, reject) => {
    const xmlHR = new XHRequest();
    xmlHR.open("GET", apiUrl, true);
    xmlHR.onreadystatechange = () => {
      if (xmlHR.readyState === 4) {
        xmlHR.status === 200
          ? resolve(JSON.parse(xmlHR.responseText))
          : reject(new Error("🔥 Fail request 🔥", apiUrl));
      }
    };
    xmlHR.send();
  });
};

module.exports = fetchData;
