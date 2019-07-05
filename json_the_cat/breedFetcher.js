// returns queried details about cat breeds. fetch the information from thecatapi.com and prints a short description of the breed.
// jshint esversion : 6
const request = require('request');

if (process.argv.length > 2) {
  process.argv.slice(2).forEach(breed => {

    const options = {
      url: `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
      headers: {
        'x-api-key': '7e2cb31f-5f9d-4b4b-b872-dd2b2b7a2b9a'
      }
    };

    request(options, (err, resp, body) => {
      if (!err) {
        if (resp.statusCode !== 200) {
          console.log(`Could not connect to the server. statusCode ${resp.statusCode}`, resp);
        } else {
          if (body) {
            body = JSON.parse(body);
            if (body.length) {
              body.forEach(entry => {
                if (entry.description) {
                  console.log(`\n${breed} Info:`);
                  console.log(entry.description);
                } else {
                  console.log(`No description for this breed, ${breed}, is provided.`);
                }
              });
            } else {
              console.log(`Could not find that breed, ${breed}.`);
            }
          } else {
            console.log(`Recieved empty response from server`);
          }
        }
      } else {
        console.log(`Could not fetch info about '${breed}' cat breed from the server.`, err);
      }
    });
  });
} else {
  console.log("Expected");
  console.log("node breedFetcher '[breed1]' '[breed2]'  '[...]'\r\n\r\n\r\n");

  console.log("Help: Try the following command");
  console.log("node breedFetcher Siberian Chartreux");
}


// End Point: https://api.thecatapi.com/v1/breeds/search?q=[catBreed]
// API Key: 7e2cb31f-5f9d-4b4b-b872-dd2b2b7a2b9a located in the header
// Unique User ID: 4xib99
// Associated Email Address: lighthouselabs<@>crowd-mail.com