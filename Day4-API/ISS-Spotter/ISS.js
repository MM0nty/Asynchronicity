const request = require("request");

const fetchIP = function(callback) {
  request("https://api.ipify.org/?format=json", function (error, response, body) {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      return callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
    }
    const IP = JSON.parse(body).ip;
    callback(null, IP);
  });
};

const fetchCoordinates = function(IP, callback) {
  request(`https://freegeoip.app/json/${IP}`, function (error, response, body) {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      return callback(Error(`Status Code ${response.statusCode} when fetching coordinates. Response: ${body}`), null);
    }
    const { latitude, longitude } = JSON.parse(body);
    callback(null, { latitude, longitude });
  });
};

const fetchPassovers = function(coordinates, callback) {
  //http://api.open-notify.org/iss-pass.json?lat=40.111&lon=-123.333
  const URL = `https://iss-pass.herokuapp.com/?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
  request(URL, function (error, response, body) {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      return callback(Error(`Status Code ${response.statusCode} when fetching passovers. Response: ${body}`), null);
    }
    const passovers = JSON.parse(body).response;
    callback(null, passovers);
  });
}

const fetchTimes = function(callback) {
  fetchIP((error, IP) => {
    if (error) {
      return callback(error, null);
    }
    fetchCoordinates(IP, (error, coordinates) => {
      if (error) {
        return callback(error, null);
      }
      fetchPassovers(coordinates, (error, passovers) => {
        if (error) {
          return callback(error, null);
        }
        return callback(null, passovers);
      });
    });
  });
};

module.exports = { fetchIP, fetchCoordinates, fetchPassovers, fetchTimes };