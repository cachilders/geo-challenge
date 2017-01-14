const axios = require('axios');
const csv   = require('csvtojson');
const csvFilePath  = './store-locations.csv';

const locations = new Promise(resolve => {
  const results = [];
  csv()
  .fromFile(csvFilePath)
  .on('json',(jsonObj)=>{
    results.push(jsonObj);
  })
  .on('done',(error)=>{
    if (error) console.error(error);
    resolve(results);
  })
});

module.exports.fetchCoordinates = function(address) {
  return axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.MAPBOX}`
  );
}

module.exports.findNearest = function(target) {
  return new Promise(resolve => {
    locations.then((locations) => {
      return locations.map((location) => {
        return Object.assign(location, {
          distance: calculateDistance(target, location),
        });
      })
      .sort((a, b) => {
        if (parseFloat(a.distance) < parseFloat(b.distance)) return -1;
        if (parseFloat(a.distance) > parseFloat(b.distance)) return 1;
        return 0;
      });
    })
    .then((result) => resolve(result[0]));
  })
}

function calculateDistance(target, candidate) {
  return Math.sqrt(
    Math.pow(candidate.Latitude - target.latitude, 2) +
    Math.pow(candidate.Longitude - target.longitude, 2)
  );
}
