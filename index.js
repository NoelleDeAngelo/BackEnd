const express = require('express');
const app = express();
const http = require('http').Server(app);
const io =require('socket.io')(http);


io.on('connection', (socket) => {
  console.log('user connected')
  socket.emit('connected?')
})

http.listen(3000, () => {
  console.log('Socket listening on 3000')
})