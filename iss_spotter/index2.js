// The main function for ISS Spotter
// jshint esversion : 6

const nextISSTimesForMyLocation = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(nextTimes => {
    for (let nextTime of nextTimes) {
      console.log(`Next pass at ${Date(nextTime.risetime)} for ${nextTime.duration} seconds!`);
    }
  });