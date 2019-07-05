/*
  A small command line node app which takes a URL and a local file path, as command-line arguments, and downloads the resource to the specified path.
*/
// jshint esversion : 6

const request = require('request');
const fs = require('fs');
if (process.argv.length === 4) {
  const requestedResource = process.argv[2];
  const localFilePath = process.argv[3];
  
  request(requestedResource, (err, status, body) => {
    if (!err) {
      fs.writeFile(localFilePath, body, (err) => {
        if (!err) {
          console.log('Fetched successfully.');
        } else {
          console.log("Could not save to the the specified path.", err);
        }
      });
    } else {
      console.log("Could not fetch the specified webpage.", err);
    }
  });
} else {
  console.log(process.argv);
  console.log("Expected");
  console.log("node fetcher '[URL]' '[LOCAL FILE PATH]' \r\n\r\n\r\n");

  console.log("Help: Try the following command");
  console.log("node fetcher http://example.com/ ./index.html");
}
