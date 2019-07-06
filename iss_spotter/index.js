// The main function for ISS Spotter
// jshint esversion : 6
const nextISSTimesForMyLocation = require('./iss');

nextISSTimesForMyLocation((err, nextTimes, location) => {
  if (!err) {
    console.log(`For ${location}:`);
    for (let nextTime of nextTimes) {
      console.log(`Next pass at ${Date(nextTime.risetime)} for ${nextTime.duration} seconds!`);
    }
  } else {
    console.log(err);
  }
});