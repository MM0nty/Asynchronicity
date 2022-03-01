const request = require('request-promise-native');

const fetchIP = function() {
  return request("https://api.ipify.org/?format=json");
}

const fetchCoordinates = function(body) {
  const IP = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${IP}`);
}

const fetchPassovers = function(body) {
  const { latitude, longitude } = JSON.parse(body)
  const URL = `https://iss-pass.herokuapp.com/?lat=${latitude}&lon=${longitude}`;
  return request(URL);
}

const fetchTimes = function() {
  return fetchIP()
  .then(fetchCoordinates)
  .then(fetchPassovers)
  .then((data) => {
    const { response } = JSON.parse(data);
    return response;
  });
};

module.exports = { fetchIP, fetchCoordinates, fetchPassovers, fetchTimes };