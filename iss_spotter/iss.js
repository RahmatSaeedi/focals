// Contains logics for fetching data from endpoints
// jshint esversion : 6
const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIp = function(callback) {
  request('https://api.ipify.org?format=json', (err, resp, body) => {
    if (err) {
      callback(`Error: Unable to obtain the IP from ipify.org.\n ${err}.`);
    } else if (resp.statusCode !== 200) {
      callback(`Error: Unable to obtain the IP from ipify.org.\n Status Code: ${resp.statusCode}.\n Response: ${body}`);
    } else {
      const ip = JSON.parse(body).ip;
      if (ip) {
        callback(null, ip);
      } else {
        callback('Error: Could not obtain yout IP address');
      }
    }
  });
};


/**
 * Makes a single API request to retrieve the lat/lng for a given IPv4 address.
 * Input:
 *   - The ip (ipv4) address (string)
 *   - A callback (to pass back an error or the lat/lng object)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The lat, lng, and location as an object (null if error). Example:
 *     { latitude: '49.27670', longitude: '-123.13000' , location: 'Toronto, Ontario, Canada'}
 */
const fetchCoordsByIP = function(ip, callback) {
  request(`http://ip-api.com/json/${ip}`, (err, resp, body) => {
    if (err) {
      return callback(`Error: Could not obtain GeoLocation from ip-api.com. ${err}`);
    } else if (resp.statusCode !== 200) {
      return callback(`Error: ${resp.statusCode} response code recieved from 'ip-api.com.' ${body}`);
    } else {
      const result = JSON.parse(body);
      if (result.status.toLowerCase() === 'success') {
        return callback(null, {
          latitude: result.lat,
          longitude: result.lon,
          location: `${result.city}, ${result.regionName}, ${result.country}`
        });
      } else {
        return callback(`Error: Failed to obtain geolocation. ${body}`);
      }
    }
  });
};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const issFlyOverTime = function(location, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${location.latitude}&lon=${location.longitude}&n=5`, (err, resp, body) => {
    if (err) {
      return callback(`Error: Could not obtain ISS pass info from open-notify.org. ${err}`);
    } else if (resp.statusCode !== 200) {
      return callback(`Error: ${resp.statusCode} response code recieved from 'open-notify.org' ${body}`);
    } else {
      const result = JSON.parse(body);
      if (result.message.toLowerCase() === 'success' && result.response) {
        return callback(null, result.response);
      } else {
        return callback(`Error: Failed to obtain ISS info. ${body}`);
      }
    }
  });
};

/**
 * Orchestrates multiple API requests in order to determine the next 5 upcoming ISS fly overs for the user's current location.
 * Input:
 *   - A callback with an error or results.
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly-over times as an array (null if error):
 *     [ { risetime: <number>, duration: <number> }, ... ]
 *   - Location used for the ISS info lookup:
 */
const nextISSTimesForMyLocation = (callback) => {
  fetchMyIp((err, ip) => {
    if (!err) {
      fetchCoordsByIP(ip, (err, coordinates) => {
        if (!err) {
          issFlyOverTime(coordinates, (err, nextTimes) => {
            if (!err) {
              return callback(null, nextTimes, coordinates.location);
            } else {
              return callback(err);
            }
          });
        } else {
          return callback(err);
        }
      });
    } else {
      return callback(err);
    }
  });

};

module.exports = nextISSTimesForMyLocation;