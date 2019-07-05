// Makes an example HTTP/1.1 request to example.com:80/ and logs the response
// jshint esversion : 6

const request = require('request');
request('http://example.com/', (err, response, body) => {
  console.log(err);
  console.log('statusCode: ', response && response.statusCode);
  console.log('body: \r\n', body);
});