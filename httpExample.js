// Makes an example HTTP/1.1 request to example.com:80/ and logs the response
// jshint esversion : 6

const net = require('net');
const conn = net.createConnection({
  host: 'example.com',
  port: 80
});

conn.setEncoding('UTF8');

conn.on('connect', () => {
  console.log('Connected to server!');
  conn.write('GET / HTTP/1.1\r\n');
  conn.write('Host: example.com\r\n');
  conn.write('\r\n');
});

conn.on('data', (data) => {
  console.log(data);
  conn.end();
});