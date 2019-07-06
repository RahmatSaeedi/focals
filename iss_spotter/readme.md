# [ISS Spotter]()
An app for space enthusiasts who are interested in spotting the International Space Station (ISS). The space station is visible because it reflects sunlight. However, unlike the Moon, the space station isn't bright enough to be seen during the day. It can only be seen when it is dawn or dusk at your location. 

## [index.js](index.js)
Logs the result to `console.log` in a human-readable format.
![Sample Output](Sample.jpg)

## [iss.js](iss.js)
Orchestrates multiple API requests in order to determine the next 5 upcoming ISS fly overs for the user's current location.
* Input:
  * A callback with an error or results.
* Returns (via Callback):
  * An error, if any (nullable)
  * The fly-over times as an array (null if error):
    ```js
    [ { risetime: <number>, duration: <number> }, ... ]
    ```
  * Location used for the ISS info lookup:

## [iss_promiss.js](iss_promiss.js) and [index2.js](index2.js)
Simillar to [`iss.js`](iss.js) and [`index.js`](index.js) but implemented using `Promises`.
