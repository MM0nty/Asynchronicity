const request = require('request');

const breedDescription = function (breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function (error, response, body) {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
    } else {
      if (!data[0]) {
        callback("Breed not found.", null);
      } else {
        const description = data[0]["description"];
        callback(null, description);
      }
    }
  })
}

module.exports = { breedDescription };