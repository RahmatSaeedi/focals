# [ISS Spotter]()
An app for space enthusiasts who are interested in spotting the International Space Station (ISS). The space station is visible because it reflects sunlight. However, unlike the Moon, the space station isn't bright enough to be seen during the day. It can only be seen when it is dawn or dusk at your location. 

## [index.js](https://github.com/RahmatSaeedi/focals/tree/master/iss_spotter/index.js)
Logs the result to `console.log` in a human-readable format.
![Sample Output](https://raw.githubusercontent.com/RahmatSaeedi/focals/master/iss_spotter/sample.jpg)

## [iss.js](https://github.com/RahmatSaeedi/focals/tree/master/iss_spotter/iss.js)
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

## [iss_promiss.js](https://github.com/RahmatSaeedi/focals/blob/master/iss_spotter/iss_promised.js) and [index2.js](https://github.com/RahmatSaeedi/focals/tree/master/iss_spotter/index2.js)
Simillar to [`iss.js`](https://github.com/RahmatSaeedi/focals/tree/master/iss_spotter/iss.js) and [`index.js`](https://github.com/RahmatSaeedi/focals/tree/master/iss_spotter/index.js) but implemented using `Promises`.
