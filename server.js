// Bare minimum to start a server
// jshint esversion : 6
const net = require('net');


const server = net.createServer((socket) => {
  socket.on('error', (err) => {
    console.log(err);
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080!');
});

server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there!');
});


server.on('data', (data) => {
  console.log('Message from client: ', data);
});