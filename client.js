// Minimum client architecture
// jshint esversion : 6
const net = require('net');


const conn = net.createConnection({
  host: 'localhost',
  port: 8080
});
conn.setEncoding('utf8'); // interpret data as text

conn.on('connect', () => {
  conn.write('Hello from client!');
});

conn.on('error', (err) => {
  console.log(err);
});

conn.on('data', (data) => {
  console.log('Server says: ', data);
});
