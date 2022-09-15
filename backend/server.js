const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {});

io.on('connection', socket => {
  console.log('Socket Active & Running: ', socket);

  socket.on('Batman', payload => {
    console.log('Payload: ', payload);
    io.emit('Batman', payload);
  });
});

server.listen(5000, () => {
  console.log('Server is Running on 5000');
});
